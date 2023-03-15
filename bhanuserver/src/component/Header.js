import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./Home";
import logo from "../Image/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <nav class="navbar navbar-light">
          <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="" />
          </a>
        </nav>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bhanu Textiles
        </Typography>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cloths
                </a>
              </li>
              <li class="nav-item">
                <a href="/auth">Services</a>
              </li>
              <li class="nav-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
