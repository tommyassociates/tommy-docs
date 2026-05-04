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
  logo: "./assets/tommy-logo.svg",
  repo: "https://github.com/tommyassociates/tommy-docs",
  editBranch: "master",
  codeSamples: ["curl", "javascript", "typescript", "python", "ruby", "go"],
  search: {
    featured: ["introduction", "quickstart", "scheduling", "timeclock", "timesheets"],
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        slug: "",
        groups: [
          {
            group: "Getting Started",
            pages: ["introduction", "quickstart", "concepts"],
          },
          {
            group: "Set Up Your Team",
            pages: ["onboarding", "solutions", "team-members", "locations", "user-settings"],
          },
        ],
      },
      {
        tab: "Workforce",
        groups: [
          {
            group: "Daily Operations",
            pages: ["scheduling", "timeclock", "timesheets"],
          },
        ],
      },
      {
        tab: "Integrations",
        groups: [
          {
            group: "Overview",
            pages: ["integrations"],
          },
          {
            group: "Accounting & Payroll",
            pages: ["integrations-xero", "integrations-quickbooks", "integrations-myob"],
          },
          {
            group: "Point of Sale",
            pages: ["integrations-pos"],
          },
        ],
      },
      {
        tab: "API Reference",
        slug: "api",
        openapi: "https://api.mytommy.com/v1/openapi.yaml",
      },
      {
        tab: "MCP Server",
        slug: "mcp",
        mcp: "./tommy.mcp.json",
      },
    ],
  },
  navbar: {
    links: [
      { type: "github", href: "https://github.com/tommyassociates" },
    ],
    primary: {
      type: "button",
      label: "Open Tommy",
      href: "https://app.mytommy.com",
    },
  },
  footer: {
    links: [
      { type: "github", href: "https://github.com/tommyassociates" },
    ],
  },
  redirects: [
    { source: "/welcome", destination: "/introduction" },
  ],
});
