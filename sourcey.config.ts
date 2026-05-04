import { defineConfig } from "sourcey";

export default defineConfig({
  name: "Tommy",
  prettyUrls: "strip",
  theme: {
    colors: {
      primary: "#1573FF",
      light: "#4C95FF",
      dark: "#0D4FA8",
    },
  },
  repo: "https://github.com/tommyassociates/tommy-docs",
  editBranch: "master",
  search: {
    featured: ["introduction"],
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        slug: "",
        groups: [
          {
            group: "Getting Started",
            pages: ["introduction"],
          },
        ],
      },
      {
        tab: "MCP Server",
        slug: "mcp",
        mcp: "./tommy.mcp.json",
      },
    ],
  },
  navbar: {
    links: [],
    primary: {
      type: "button",
      label: "Dashboard",
      href: "https://app.mytommy.com",
    },
  },
  footer: {
    links: [
      { type: "github", href: "https://github.com/tommyassociates" },
    ],
  },
  redirects: [
    { source: "/api", destination: "/mcp" },
  ],
});
