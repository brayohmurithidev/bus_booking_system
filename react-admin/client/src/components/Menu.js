// in src/Menu.js
import * as React from "react";
import { DashboardMenuItem, Menu, MenuItemLink } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";

export const Menubar = (props) => (
  <Menu {...props}>
    <DashboardMenuItem to="/" />
    <MenuItemLink to="/saccos" primaryText="Saccos" leftIcon={<BookIcon />} />
    <MenuItemLink
      to="/bookings"
      primaryText="bookings"
      leftIcon={<BookIcon />}
    />
    <MenuItemLink to="/Buses" primaryText="buses" leftIcon={<BusAlertIcon />} />
    <MenuItemLink
      to="/schedule"
      primaryText="Schedule"
      leftIcon={<PeopleIcon />}
    />
    <MenuItemLink
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);
