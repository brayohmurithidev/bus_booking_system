// in src/MyLayout.js
import * as React from "react";
import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";
import { Menubar } from "./Menu";

const MyLayout = (props) => (
  (<Layout {...props} appBar={MyAppBar} />),
  (<Layout {...props} menu={Menubar} />)
);

export default MyLayout;
