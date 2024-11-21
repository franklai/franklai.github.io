// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Frank 的五四三",
  tagline: "in the middle of nowhere",
  url: "https://franklai.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  future: {
    experimental_faster: true,
  },

  markdown: {
    format: 'detect',
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          postsPerPage: 3,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: false,
        language: ["en", "zh"],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Frank 的五四三",
      items: [{ to: "blog", label: "Blog", position: "left" }],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
