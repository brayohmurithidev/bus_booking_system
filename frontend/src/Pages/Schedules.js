import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ScheduleCard from "../components/ScheduleCard";
import { Box, Container } from "@mui/material";
import BookingModal from "../components/BookingModal";

const Schedules = () => {
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
    <Container
      spacing={2}
      sx={{
        paddingTop: "26px",
      }}
    >
      <BookingModal open={open} handleClose={handleClose} />
      <ScheduleCard handleOpen={handleOpen} />
      <ScheduleCard handleOpen={handleOpen} />
      <ScheduleCard handleOpen={handleOpen} />
      <ScheduleCard handleOpen={handleOpen} />
    </Container>
  );
};

export default Schedules;
