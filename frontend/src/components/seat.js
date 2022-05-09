import React, { useEffect, useState } from "react";
import "./seat.css";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const Seat = () => {
  const [selected, setSelected] = useState([]);

  const handleClicked = (e) => {
    if (e.target.checked === true) {
      setSelected((oldsetSelected) => [...oldsetSelected, e.target.id]);
    } else {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] === e.target.id) {
          selected.splice(i, 1);
          i--;
          setSelected([...selected]);
        }
      }
    }
  };
  console.log(selected);
  return (
    <Container>
      <Grid container>
        <Grid item md="6">
          <div className="vehicle">
            <div className="heading">
              <h1>Please select a seat</h1>
            </div>

            {/* <div className="exit exit--front fuselage"></div> */}
            <ol className="cabin fuselage">
              <li className="row row--1">
                <ol className="seats" type="A">
                  <li className="seat">
                    <input type="checkbox" id="2" onClick={handleClicked} />
                    <label for="2">2</label>
                  </li>

                  <li className="seat">
                    <input type="checkbox" id="1" onClick={handleClicked} />
                    <label for="1">1</label>
                  </li>
                  <li className="seat">
                    <input type="checkbox" disabled id="1D" />
                    <label for="1D">Driver</label>
                  </li>
                </ol>
              </li>
              <div>
                <hr className="divider"></hr>
              </div>
              <li className="row row--2">
                <ol className="seats" type="A">
                  <li className="seat">
                    <input type="checkbox" id="3" onClick={handleClicked} />
                    <label for="3">3</label>
                  </li>

                  <li className="seat">
                    <input type="checkbox" id="4" onClick={handleClicked} />
                    <label for="4">4</label>
                  </li>
                  <li className="seat">
                    <input type="checkbox" id="5" onClick={handleClicked} />
                    <label for="5">5</label>
                  </li>
                </ol>
              </li>
              <li className="row row--3">
                <ol className="seats" type="A">
                  <li className="seat">
                    <input type="checkbox" id="6" onClick={handleClicked} />
                    <label for="6">6</label>
                  </li>

                  <li className="seat">
                    <input type="checkbox" id="7" onClick={handleClicked} />
                    <label for="7">7</label>
                  </li>
                  <li className="seat">
                    <input type="checkbox" id="8" onClick={handleClicked} />
                    <label for="8">8</label>
                  </li>
                </ol>
              </li>
              <li className="row row--4">
                <ol className="seats" type="A">
                  <li className="seat">
                    <input type="checkbox" id="9" onClick={handleClicked} />
                    <label for="9">9</label>
                  </li>

                  <li className="seat">
                    <input type="checkbox" id="10" onClick={handleClicked} />
                    <label for="10">10</label>
                  </li>
                  <li className="seat">
                    <input type="checkbox" id="11" onClick={handleClicked} />
                    <label for="11">11</label>
                  </li>
                </ol>
              </li>
              <li className="row row--5">
                <ol className="seats" type="A">
                  <li className="seat">
                    <input type="checkbox" id="12" onClick={handleClicked} />
                    <label for="12">12</label>
                  </li>

                  <li className="seat">
                    <input type="checkbox" id="13" onClick={handleClicked} />
                    <label for="13">13</label>
                  </li>
                  <li className="seat">
                    <input type="checkbox" id="14" onClick={handleClicked} />
                    <label for="14">14</label>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </Grid>
        <Grid item md="6">
          <div className="booking-details">
            <h2>Booking Details</h2>
            <h3>
              {" "}
              Selected Seats (<span id="counter">{selected.length}</span>):
            </h3>
            <ul id="selected-seats">{`${selected}`}</ul>
            Total:{""}
            <b>
              Ksh.<span id="total">{selected.length * 500}</span>
            </b>
            <button className="checkout-button">Checkout &raquo;</button>
            <div id="legend"></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Seat;
