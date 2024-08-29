import type { PropsWithChildren } from "react";
import Container from "@mui/material-pigment-css/Container";

function Layout({ children }: PropsWithChildren) {
  return <Container maxWidth="md">{children}</Container>;
}

export default Layout;
