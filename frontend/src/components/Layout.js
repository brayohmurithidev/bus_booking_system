import { Button } from "@mui/material";
import React, { useState } from "react";
import ModalDialog from "./ModalDialog";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // Declare a state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };
  // function to handle modal open
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Navbar handleOpen={handleOpen} />
      </div>

      <div>
        {/* Display the modal and pass props */}
        <ModalDialog open={open} handleClose={handleClose} />
      </div>

      <div className="pages-container">{children}</div>
    </div>
  );
};

export default Layout;
