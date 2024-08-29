"use client";

import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import { useTheme } from "@mui/material-pigment-css";

function ColorModeSwitcher() {
  const theme = useTheme();
  const { mode, systemMode, setColorScheme } = useColorScheme();

  const onClick = () => {
    console.log(theme);
    console.log(mode, systemMode);
    setColorScheme(mode === "dark" ? "light" : "dark");
    // document.documentElement.classList.toggle("theme-dark");
  };

  return <Button color="inherit" onClick={onClick}>Toggle color scheme</Button>;
}

export default ColorModeSwitcher;
