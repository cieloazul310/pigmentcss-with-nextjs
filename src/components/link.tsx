import NextLink, { type LinkProps as NextLinkProps} from "next/link";
import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";
import isInternal from "@/utils/isInternal";

function Link({ href, ...props }: NextLinkProps & MuiLinkProps) {
  if (isInternal(href)) {
    return <MuiLink component={NextLink} href={href} {...props} />;
  }

  return <MuiLink href={href} target="_blank" rel="noopener noreferer" {...props} />
}

export default Link;
