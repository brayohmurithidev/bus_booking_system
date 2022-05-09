import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";

import React from "react";

const ScheduleCard = ({ handleOpen }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#efefef",
        marginBottom: "16px",
      }}
    >
      <Grid container>
        <Grid item md="3">
          <CardMedia
            sx={{
              position: "relative",
            }}
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "100px",
                left: "50%",
              }}
            >
              KUKENA
            </Typography>
          </CardMedia>
        </Grid>
        <Grid item md="9">
          <CardHeader
            action={
              <IconButton
                color="success"
                sx={{
                  fontSize: "8px",
                }}
              >
                Lipa na Mpesa
              </IconButton>
            }
          />
          <CardContent>
            <Typography
              variant="h6"
              color="primary"
              component="h4"
              sx={{
                textAlign: "start",
              }}
            >
              KBX 469T{" "}
              {/* <Typography
                variant="subtitle1"
                component="span"
                color="textSecondary"
                sx={{
                  marginLeft: "20px",
                }}
              >
                MARK ONE
              </Typography> */}
            </Typography>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                backgroundColor: "#efefef",
              }}
            >
              <Table>
                <TableHead>
                  <TableCell>FROM</TableCell>
                  <TableCell>TO</TableCell>
                  <TableCell>DEPARTURE DATE</TableCell>
                  <TableCell>DEPARTURE TIME</TableCell>
                  <TableCell>PRICE</TableCell>
                </TableHead>
                <TableBody>
                  <TableCell>Meru</TableCell>
                  <TableCell>Nairobi</TableCell>
                  <TableCell>10/05/2022</TableCell>
                  <TableCell>8:30 Am</TableCell>
                  <TableCell>700</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                marginTop: "16px",
              }}
            >
              BOOK NOW
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ScheduleCard;
