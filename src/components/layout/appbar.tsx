import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ColorModeSwitcher from "@/components/color-mode-switcher";
import AppBarDrawerHandler from "./appbar-drawer-handler";

function AppBar() {
  return (
    <MuiAppBar variant="elevation" position="sticky">
      <Toolbar sx={{ gap: 2 }}>
        <AppBarDrawerHandler />
        <Typography variant="h6" component="h1">
          Pigment CSS + Next.js App Router
        </Typography>
        <div sx={{ flexGrow: 1 }} />
        <ColorModeSwitcher />
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
