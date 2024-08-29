import type { MDXComponents } from "mdx/types";
import Typography from "@mui/material/Typography";
import Link from "@/components/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <Typography sx={{ my: 2 }}>{children}</Typography>,
    h1: ({ children }) => (
      <Typography variant="h1" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
        {children}
      </Typography>
    ),
    a: ({ href, children }) => {
      if (!href) return children;
      return <Link href={href}>{children}</Link>;
    },
    pre: ({ children }) => (
      <pre sx={{ p: 4, my: 4, bgcolor: "grey.50", borderRadius: 2 }}>
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code
        sx={{
          color: "secondary.900",
          bgcolor: "secondary.100",
          fontFamily: "monospace",
          "pre > &": { color: "inherit", bgcolor: "inherit" },
        }}
      >
        {children}
      </code>
    ),
    ...components,
  };
}
