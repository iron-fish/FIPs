import path from "path";
import { parseFileByPath } from "./parseFileByPath";
import { parseNestedDir } from "./parseNestedDir";
import { startCase } from "lodash-es";

export type SidebarLabeledItem = {
  id: string;
  label?: string;
};

export type SidebarItem = string | SidebarLabeledItem | SidebarCategory;

export type SidebarCategory = {
  label: string;
  items: SidebarItem[];
};

export type SidebarDefinition = Array<SidebarCategory | SidebarItem>;

export type SidebarReference =
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      items: SidebarReference[];
    };

function buildSidebarItem(
  item: Exclude<SidebarItem, SidebarCategory>,
  contentMap: Record<string, Record<string, string>>,
  pathPrefix: string
): { title: string; href: string } {
  if (typeof item === "string") {
    return {
      title: contentMap[item].title,
      href: `${pathPrefix}/${contentMap[item].document}`,
    };
  }

  return {
    title: item.label ?? contentMap[item.id].title,
    href: `${pathPrefix}/${contentMap[item.id].document}`,
  };
}

export function buildSidebarByPath(
  contentPath: string,
  pathPrefix: string,
  groupBy = 'category'
) {
  const UNCATEGORIZED = '__UNCATEGORIZED__';

  const contentMap = parseNestedDir(contentPath).flat().filter((item) => item.endsWith('.mdx'))
    .reduce<Record<string, Array<Record<string, string>>>>((acc, item) => {
      const builtPath = path.join(contentPath, item);
      const parsed = {
        ...parseFileByPath(builtPath).frontMatter,
        document: item.replace(/\.mdx?$/, ""),
      } as Record<string, string>;

      const category = parsed[groupBy] ?? UNCATEGORIZED;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(parsed);

      return acc;
    }, {});

  let sidebar: SidebarReference[] = [];
  const {
    [UNCATEGORIZED]: uncategorized,
    ...categories
  } = contentMap;

  if (uncategorized) {
    sidebar = sidebar.concat(uncategorized.map((item) => {
      return {
        title: item.title,
        href: `${pathPrefix}/${item.document}`,
      }
    }))
  }

  for (const category in categories) {
    sidebar.push({
      title: startCase(category),
      items: categories[category].map((item) => {
        return {
          title: item.title,
          href: `${pathPrefix}/${item.document}`,
        }
      })
    })
  }

  return sidebar;
}

export function getSidebarContent(
  sidebarDefinition: SidebarDefinition,
  contentPath: string,
  pathPrefix: string
) {
  const contentMap = parseNestedDir(contentPath)
    .map((item) => {
      return item.join("/");
    })
    .filter((item) => item.endsWith(".mdx"))
    .map((item) => {
      const builtPath = path.join(contentPath, item);
      return {
        ...parseFileByPath(builtPath).frontMatter,
        document: item.replace(/\.mdx?$/, ""),
      } as Record<string, string>;
    })
    .reduce<Record<string, Record<string, string>>>((acc, current) => {
      acc[current.document] = current;
      return acc;
    }, {});

  return sidebarDefinition.map((item) => {
    return buildSidebar(item, contentMap, pathPrefix);
  });
}

function buildSidebar(
  item: SidebarItem,
  contentMap: Record<string, Record<string, string>>,
  pathPrefix: string
): SidebarReference {
  if (typeof item === "string" || !("items" in item)) {
    return buildSidebarItem(item, contentMap, pathPrefix);
  }

  return {
    title: item.label,
    items: item.items.map((nestedItem) => {
      return buildSidebar(nestedItem, contentMap, pathPrefix);
    }),
  };
}
