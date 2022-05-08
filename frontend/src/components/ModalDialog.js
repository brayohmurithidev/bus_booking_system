import { Dialog } from "@mui/material";
import React from "react";
import Signup from "./Signup";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Signup handleClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default ModalDialog;
