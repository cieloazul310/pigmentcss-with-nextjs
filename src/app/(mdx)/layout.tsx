import type { PropsWithChildren } from "react";
import Container from "@mui/material-pigment-css/Container";

function Layout({ children, ...props }: PropsWithChildren) {
  console.log(props);
  return <Container maxWidth="md">{children}</Container>;
}

export default Layout;
