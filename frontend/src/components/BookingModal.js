import { Dialog } from "@mui/material";
import React from "react";
import Seat from "./Seat";
import Signup from "./Signup";

const BookingModal = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Seat />
      </Dialog>
    </div>
  );
};

export default BookingModal;
