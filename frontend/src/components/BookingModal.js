import { Dialog } from "@mui/material";
import React from "react";
import Seat from "./Seat";

const BookingModal = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog maxWidth="100%" sx={{}} open={open} onClose={handleClose}>
        <Seat handleClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default BookingModal;
