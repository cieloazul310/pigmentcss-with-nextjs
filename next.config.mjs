import { withPigment } from "@pigment-css/nextjs-plugin";
import { createTheme, colors } from "@mui/material";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["md", "mdx", "tsx"],
  output: "export",
  basePath: "/pigmentcss-with-nextjs",
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
      h1: {
        fontSize: "4rem"
      },
      h2: {
        fontSize: "2.4rem",
      },
      h3: {
        fontSize: "2rem",
      },
      h4: {
        fontSize: "1.6rem",
      },
      h5: {
        fontSize: "1.4rem"
      },
      h6: {
        fontSize: "1.2rem",
      },
    },
    colorSchemes: {
      light: true,
      dark: true,
    },
    palette: {
      primary: colors.teal,
      secondary: colors.orange,
    },
  }),
};

export default withPigment(withMDX(nextConfig), pigmentConfig);
