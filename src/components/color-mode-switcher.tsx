"use client";

import Button from "@mui/material/Button";

function ColorModeSwitcher() {
  const onClick = () => {
    document.documentElement.classList.toggle("theme-dark");
  };

  return <Button color="inherit" onClick={onClick}>Toggle color scheme</Button>;
}

export default ColorModeSwitcher;
