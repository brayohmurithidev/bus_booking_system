import React from "react";
import Avatar from "@mui/material/Avatar";
import ScheduleCard from "../components/ScheduleCard";
import { Box, Container } from "@mui/material";

const Schedules = () => {
  return (
    <Container
      spacing={2}
      sx={{
        paddingTop: "26px",
      }}
    >
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Container>
  );
};

export default Schedules;
