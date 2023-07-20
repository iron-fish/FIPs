import { messages } from "./messages";

export const links = [
  {
    label: messages.learn,
    color: "blue",
    items: [
      {
        title: messages.faqTitle,
        description: messages.faqDescription,
        href: "https://ironfish.network/learn/faq",
        image: "/images/nav/learn-mag-glass.svg",
      },
      {
        title: messages.whitepaperTitle,
        description: messages.whitepaperDescription,
        href: "https://ironfish.network/learn/whitepaper",
        image: "/images/nav/learn-whitepaper.svg",
      },
      {
        title: messages.tokenomicsTitle,
        description: messages.tokenomicsDescription,
        href: "https://ironfish.network/learn/tokenomics",
        image: "/images/nav/learn-tokenomics.svg",
      },
      {
        title: messages.blogTitle,
        description: messages.blogDescription,
        href: "https://ironfish.network/learn/blog",
        image: "/images/nav/learn-brain.svg",
      },
    ],
  },
  {
    label: messages.use,
    color: "orange",
    items: [
      {
        title: messages.getStartedTitle,
        description: messages.getStartedDescription,
        href: "https://ironfish.network/use/get-started",
        image: "/images/nav/use-book-fish.svg",
      },
      {
        title: messages.nodeAppTitle,
        description: messages.nodeAppDescription,
        href: "https://ironfish.network/use/node-app",
        image: "/images/nav/use-key-fish.svg",
      },
      {
        title: messages.mineIronTitle,
        description: messages.mineIronDescription,
        href: "https://ironfish.network/use/get-started/mining",
        image: "/images/nav/use-strangely-normal-looking-fish.svg",
      },
      {
        title: messages.blockExplorerTitle,
        description: messages.blockExplorerDescription,
        href: "https://explorer.ironfish.network/",
        image: "/images/nav/use-block.svg",
      },
      {
        title: messages.ecosystemTitle,
        description: messages.ecosystemDescription,
        href: "https://ironfish.network/use/ecosystem",
        image: "/images/nav/use-ecosystem.svg",
      },
    ],
  },
  {
    label: messages.developers,
    color: "yellow",
    items: [
      {
        title: messages.documentationTitle,
        description: messages.documentationDescription,
        href: "https://ironfish.network/developers/documentation",
        image: "/images/nav/dev-blowfish.svg",
      },
      {
        title: messages.githubTitle,
        description: messages.githubDescription,
        href: "https://github.com/iron-fish/ironfish",
        image: "/images/nav/dev-tv-fish.svg",
      },
    ],
  },
  {
    label: messages.community,
    color: "green",
    items: [
      {
        title: messages.communityHighlightsTitle,
        description: messages.communityHighlightsDescription,
        href: "https://ironfish.network/community/highlights",
        image: "/images/nav/community-rubiks-cube.svg",
      },
      {
        title: messages.mediaTitle,
        description: messages.mediaDescription,
        href: "https://ironfish.network/community/media",
        image: "/images/nav/community-loudspeaker.svg",
      },
      {
        title: messages.wikiTitle,
        description: messages.wikiDescription,
        href: "https://github.com/iron-fish/ironfish/wiki",
        image: "/images/nav/community-chat-bubbles.svg",
      },
      {
        title: messages.communityTitle,
        description: messages.communityDescription,
        href: "https://ironfish.network/community/our-community",
        image: "/images/nav/community-earth.svg",
      },
    ],
  },
  {
    label: messages.company,
    color: "pink",
    items: [
      {
        title: messages.aboutUsTitle,
        description: messages.aboutUsDescription,
        href: "https://ironfish.network/company/about-us",
        image: "/images/nav/company-submarine.svg",
      },
      // {
      //   title: messages.careersTitle,
      //   description: messages.careersDescription,
      //   href: "https://jobs.lever.co/ironfish",
      //   image: "/images/nav/company-keyhole-fish.svg",
      // },
      {
        title: messages.mediaKitTitle,
        description: messages.mediaKitDescription,
        href: "https://ironfish.network/company/media-kit",
        image: "/images/nav/company-vertical-fish.svg",
      },
      {
        title: messages.contactUsTitle,
        description: messages.contactUsDescription,
        href: "mailto:contact@ironfish.network",
        image: "/images/nav/company-jellyfish.svg",
      },
    ],
  },
] as const;
