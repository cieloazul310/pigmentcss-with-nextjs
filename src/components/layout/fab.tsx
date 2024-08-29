"use client";

import MuiFab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayoutStore } from "@/providers/layout-store-provider";

function Fab() {
  const { toggleDrawer } = useLayoutStore((store) => store);
  return (
    <MuiFab color="secondary" onClick={toggleDrawer}>
      <MenuIcon />
    </MuiFab>
  );
}

export default Fab;
