"use client";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayoutStore } from "@/providers/layout-store-provider";

function AppBarDrawerHandler() {
  const { toggleDrawer } = useLayoutStore((store) => store);

  return (
    <IconButton color="inherit" onClick={toggleDrawer}>
      <MenuIcon />
    </IconButton>
  );
}

export default AppBarDrawerHandler;
