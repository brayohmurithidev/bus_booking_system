import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          marginBottom: "16px",
          color: "white",
        }}
      >
        ~ TRAVEL AT YOUR CONVINIENCE ~
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          textAlign: "justify",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Grid item xs={6} md={8}>
          <Paper
            sx={{
              minHeight: "30vh",
              padding: "15px",
              backgroundColor: "#0A1929",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              Travel Ease is a travellor based and is set to transform bus
              travel in the country by bringing ease and convinience to
              thousands of Kenyan travellors. We work with Kenyan leading bus
              operators to bring convinience of digital booking.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: "30vh",
              padding: "15px",
              backgroundColor: "#0A1929",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              Travel Ease is a travellor based and is set to transform bus
              travel in the country by bringing ease and convinience to
              thousands of Kenyan travellors. We work with Kenyan leading bus
              operators to bring convinience of digital booking.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: "30vh",
              padding: "15px",
              backgroundColor: "#0A1929",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              Travel Ease is a travellor based and is set to transform bus
              travel in the country by bringing ease and convinience to
              thousands of Kenyan travellors. We work with Kenyan leading bus
              operators to bring convinience of digital booking.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
          <Paper
            sx={{
              minHeight: "30vh",
              padding: "15px",
              backgroundColor: "#0A1929",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              Travel Ease is a travellor based and is set to transform bus
              travel in the country by bringing ease and convinience to
              thousands of Kenyan travellors. We work with Kenyan leading bus
              operators to bring convinience of digital booking.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
