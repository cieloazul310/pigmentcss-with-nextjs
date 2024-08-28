import { withPigment } from "@pigment-css/nextjs-plugin";
import { createTheme } from "@mui/material";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

const nextConfig = {
  pageExtensions: ["md", "mdx", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
  },
});

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: createTheme({
    cssVariables: true,
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    colorSchemes: {
      light: {
        colors: {
          background: "#f9f9f9",
          foreground: "#121212",
        },
      },
      dark: {
        colors: {
          background: "#212121",
          foreground: "#fff",
        },
      },
    },
    getSelector: (colorScheme) =>
      colorScheme ? `.theme-${colorScheme}` : ":root",
  }),
};

export default withPigment(withMDX(nextConfig), pigmentConfig);
