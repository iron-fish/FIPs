import { Grid, Text, GridItem, Link } from "@/lib/ui";
import { Fragment } from "react";

type Props = {
  content: {
    title?: string;
    description?: string;
    author?: string;
    discussion?: string;
    status?: string;
    category?: string;
    created?: string;
    requires?: string;
  };
};

export function Preamble(content: Props) {
  const entries = Object.entries(content.content).filter(
    (k) => k[0] != "title"
  );
  if (entries.length == 0) {
    return null;
  }
  return (
    <Grid mb="10" templateColumns="auto 1fr" gap={1}>
      {entries.map(([property, value], i) => {
        return (
          <Fragment key={i}>
            <GridItem>
              <Text textStyle="md" fontWeight="bold">
                {property}
              </Text>
            </GridItem>
            <GridItem ml="10">
              {property === "discussion" ? (
                <Link
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  fontWeight="medium"
                  textDecoration="underline"
                  color="#3344dd"
                  fontSize="md"
                  _visited={{ color: "#884488" }}
                >
                  {value}
                </Link>
              ) : (
                <Text textStyle="md">{value}</Text>
              )}
            </GridItem>
          </Fragment>
        );
      })}
    </Grid>
  );
}
