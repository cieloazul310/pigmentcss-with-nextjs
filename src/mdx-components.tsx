
import type { MDXComponents } from "mdx/types";
import Typography from "@mui/material/Typography";
// import Link from "@/components/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <Typography my={2}>{children}</Typography>,
    h1: ({ children }) => (
      <Typography variant="h1" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" mt={6} mb={2}>
        {children}
      </Typography>
    ),
    ...components,
  };
}
