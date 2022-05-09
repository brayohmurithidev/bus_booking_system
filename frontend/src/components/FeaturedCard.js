import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, TableCell, TableRow } from "@mui/material";

export default function ActionAreaCard({ handleOpen }) {
  return (
    <Card sx={{ maxWidth: 420, backgroundColor: "#efefef", color: "#333" }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            KBX 463T
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          <TableRow>
            <TableCell variant="head">FROM:</TableCell>
            <TableCell>Meru</TableCell>
            <TableCell variant="head">To:</TableCell>
            <TableCell>Nairobi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Departure Day:</TableCell>
            <TableCell>Today</TableCell>
            <TableCell variant="head">Departure Time:</TableCell>
            <TableCell>8:30 Am</TableCell>
          </TableRow>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
