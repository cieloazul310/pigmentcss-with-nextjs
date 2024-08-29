"use client";
import NextLink from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLayoutStore } from "@/providers/layout-store-provider";

function Drawer() {
  const { drawerOpen, setDrawerOpen } = useLayoutStore((store) => store);
  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <MuiDrawer open={drawerOpen} onClose={onClose}>
      <div sx={{ width: 280 }}>
        <Toolbar />
      </div>
    </MuiDrawer>
  );
}

export default Drawer;
