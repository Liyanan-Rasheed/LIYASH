import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          style={{ color: "white", fontFamily: "sans-serif" }}
        >
          REGISTER  
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
