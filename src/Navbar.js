import React from "react";
import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
export function Navbar() {
  return (
    <>
      <AppBar position="static" sx={{ background: "orange" }}>
        <Toolbar>
          <IconButton sx={{ size: "large" }} aria-label="homeicon">
            {" "}
            <DinnerDiningIcon />
          </IconButton>

          <Typography sx={{ fontSize: "1.3rem", fontWeight: "800" }}>
            {" "}
            Grab a Dish - recipes
          </Typography>
          <Stack
            direction="row"
            edge="end"
            spacing={2}
            sx={{ justifyContent: "flex-end" }}
          ></Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
