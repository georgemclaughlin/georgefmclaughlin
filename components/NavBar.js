import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbor from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbor>
          <Typography color="inherit">George F McLaughlin</Typography>
        </Toolbor>
      </AppBar>
    </div>
  );
};

export default NavBar;
