import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import "./seats.css";

const Seats = () => {
  const [classes, setClasses] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);

  var seats = [
    { id: "1", value: "1", column: "1", seatNo: "1", status: "available" },
    { id: "2", column: "2", seatNo: "2", status: "unavailable" },
    { id: "3", column: "3", seatNo: "3", status: "available" },
    { id: "4", column: "1", seatNo: "4", status: "available" },
    { id: "5", column: "2", seatNo: "5", status: "available" },
    { id: "6", column: "3", seatNo: "6", status: "unavailable" },
    { id: "4", column: "1", seatNo: "4", status: "available" },
    { id: "5", column: "2", seatNo: "5", status: "available" },
    { id: "6", column: "3", seatNo: "6", status: "unavailable" },
  ];

  console.log(
    `Your selected seat is ${classes} and its seat No${selectedSeat}`
  );
  const seatMap = seats.map((seat) => {
    var selectedId = seat.id;
    return (
      <Grid
        item
        sx={{}}
        md="4"
        onClick={(e) => {
          setClasses("unavailable");
          setSelectedSeat(seat.id);
        }}
        className={`seat  ${
          seat.status === "available" ? "available" : "unavailable"
        }`}
        key={seat.id}
      >
        <Grid>{seat.seatNo}</Grid>
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
      <div id="jquery-script-menu">
        <div className="jquery-script-center">
          <div className="jquery-script-clear"></div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>Select Your prefered seat</h1>
          <div id="seat-map">
            <div className="front-indicator">
              <Grid container>{seatMap}</Grid>
            </div>
          </div>
          <div className="booking-details">
            <h2>Booking Details</h2>
            <h3>
              {" "}
              Selected Seats (<span id="counter">0</span>):
            </h3>
            <ul id="selected-seats"></ul>
            Total:{" "}
            <b>
              Ksh.<span id="total">0</span>
            </b>
            <button className="checkout-button">Checkout &raquo;</button>
            <div id="legend"></div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Seats;

// import React from "react";
// import { SeatingChart } from "react-seat-charts";

// export default class App extends React.Component {
//   render() {
//     // SeatingChart requires a double nested array of seat objects
//     let seats = [
//       [
//         { seatType: "regular", status: "available", label: "1" },
//         { seatType: "regular", status: "available", label: "2" },
//         { seatType: "regular", status: "available", label: "3" },
//         { seatType: "regular", status: "available", label: "4" },
//         { seatType: "regular", status: "available", label: "5" },
//         { seatType: "regular", status: "available", label: "6" },
//       ],
//       [{ seatType: "spacer" }],
//       [
//         { seatType: "regular", status: "available", label: "1" },
//         { seatType: "regular", status: "unavailable", label: "2" },
//         { seatType: "regular", status: "available", label: "3" },
//         { seatType: "regular", status: "available", label: "4" },
//         { seatType: "regular", status: "available", label: "5" },
//         { seatType: "regular", status: "available", label: "6" },
//       ],
//     ];

//     // Naming is optional
//     let naming = {
//       rows: ["A", "B"],
//       columns: ["1", "2"],
//     };

//     // Let there be seats
//     let seatingChart = <SeatingChart seats={seats} naming={naming} />;
//     return <div>{seatingChart}</div>;
//   }
// }
