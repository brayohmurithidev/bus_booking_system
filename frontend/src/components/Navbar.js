import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = ({ handleOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "rgb(27, 29, 25)",
      }}
    >
      <Toolbar
        sx={{
          padding: "10px",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <NavLink activeClassName="active" className="links" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" className="links" to="/schedules">
            Available buses
          </NavLink>
          <NavLink activeClassName="active" className="links" to="/about">
            About Us
          </NavLink>
          <NavLink activeClassName="active" className="links" to="/route">
            Route
          </NavLink>
          <NavLink activeClassName="active" className="links" to="/contact">
            Contact
          </NavLink>
        </Box>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle size="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem color="secondary" onClick={handleClose}>
              Login
            </MenuItem>
            <MenuItem onClick={handleOpen}>Signup</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
