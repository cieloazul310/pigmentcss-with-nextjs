import NextLink, { type LinkProps as NextLinkProps} from "next/link";
import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";

function Link(props: NextLinkProps & MuiLinkProps) {
  return <MuiLink component={NextLink} {...props} />
}

export default Link;
