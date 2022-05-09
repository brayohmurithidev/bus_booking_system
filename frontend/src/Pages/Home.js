import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  outlinedInputClasses,
  Select,
  styled,
  Typography,
} from "@mui/material";
import SeachIcon from "@mui/icons-material/Search";
import FeaturedCard from "../components/FeaturedCard";
import BookingModal from "../components/BookingModal";

const StyledSelect = styled(Select)(`
&.${outlinedInputClasses.notchedOutline}{
  border-color:red;
}
&:hover .${outlinedInputClasses.notchedOutline}{
  border-color:red;
}
&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}{
  border-color: lime;
}
`);

const Home = () => {
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
        <BookingModal open={open} handleClose={handleClose} />
      </div>
      <div className="section-intro">
        <div className="section-content">
          <Typography variant="h4">
            Travel At any time from any of our partnered{" "}
            <Typography variant="h2" color="primary">
              Terminus.
            </Typography>
          </Typography>
        </div>

        <Box
          sx={{
            backgroundColor: "white",
            width: "200px",
            height: "auto",
          }}
        >
          <form className="section-form">
            <Typography variant="h6" component="h3">
              Filter Scheduled buses...
            </Typography>
            <FormControl
              variant="outlined"
              sx={{
                m: 1,
                minWidth: 250,
                color: "white",
              }}
            >
              <InputLabel id="label1" color="secondary">
                From
              </InputLabel>
              <Select
                labelStyle={{
                  color: "white",
                }}
                label="From"
                labelId="label1"
                sx={{
                  height: 40,
                  backgroundColor: "#fff",
                  // borderColor: "#fff",
                }}
              >
                <MenuItem>Meru</MenuItem>
                <MenuItem>Chuka</MenuItem>
                <MenuItem>Chogoria</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{
                m: 1,
                minWidth: 250,
                color: "white",
              }}
            >
              <InputLabel id="label2" color="secondary">
                To
              </InputLabel>
              <Select
                labelStyle={{
                  color: "white",
                }}
                label="To"
                labelId="label2"
                sx={{
                  height: 40,
                  backgroundColor: "#fff",
                  // borderColor: "#fff",
                }}
              >
                <MenuItem>Meru</MenuItem>
                <MenuItem>Chuka</MenuItem>
                <MenuItem>Chogoria</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              color="primary"
              size="medium"
              sx={{
                color: "white",
                padding: "8px",
                "& .MuiIconButton-root": {
                  border: "1px solid white",
                },
              }}
            >
              Search
              <SeachIcon sx={{ marginLeft: "16px" }} />
            </IconButton>
          </form>
        </Box>
        <div className="image-gif"></div>
      </div>
      <div className="Featured-buses">
        <Typography variant="h5">~ FEATURED SCHEDULES ~</Typography>
        <Grid container>
          <Grid item md="4">
            <FeaturedCard handleOpen={handleOpen} />
          </Grid>
          <Grid item md="4">
            <FeaturedCard handleOpen={handleOpen} />
          </Grid>
          <Grid item md="4">
            <FeaturedCard handleOpen={handleOpen} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
