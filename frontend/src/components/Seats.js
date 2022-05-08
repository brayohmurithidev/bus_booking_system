import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import "./seats.css";

const Seats = () => {
  const [classes, setClasses] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [unselect, setUnselect] = useState(false);

  var seats = [
    { id: "1", column: "1", seatNo: "1", status: "available" },
    { id: "2", column: "2", seatNo: "2", status: "unavailable" },
    { id: "3", column: "3", seatNo: "3", status: "available" },
    { id: "4", column: "1", seatNo: "4", status: "available" },
    { id: "5", column: "2", seatNo: "5", status: "available" },
    { id: "7", column: "3", seatNo: "6", status: "unavailable" },
    { id: "8", column: "1", seatNo: "4", status: "available" },
    { id: "9", column: "2", seatNo: "5", status: "available" },
    { id: "10", column: "3", seatNo: "6", status: "unavailable" },
  ];

  const seatMap = seats.map((seat) => {
    var selectedId = seat.id;
    return (
      <Grid
        item
        sx={{}}
        md="4"
        onClick={(e) => {
          // setClasses("unavailable");
          setUnselect(!unselect);

          setSelectedSeat((oldSelectedSeat) => [...oldSelectedSeat, seat.id]);
          const names = e.target.getAttribute("name");
          console.log(
            `Your selected seat is ${unselect} and its seat No ${selectedSeat} and target ${names}`
          );
        }}
        key={seat.id}
      >
        <Grid
          className={`seat  ${
            seat.status === "available" ? "available" : "unavailable"
          }`}
          name={seat.id}
          // onClick={}
        >
          {seat.seatNo}
        </Grid>
      </Grid>
    );
  });

  return (
    <Box
      sx={{
        position: "fixed",
        left: "30%",
        top: "10%",
        // backgroundColor: "rgb(27, 29, 25)",
        padding: "10px",
        color: "#333",
        display: "flex",
        width: "300px",
      }}
    >
      <Grid container>{seatMap}</Grid>
    </Box>
  );
};

export default Seats;
