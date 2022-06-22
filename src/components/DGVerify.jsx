import { Container, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import OnBooking from "./OnBooking";
import VerifyButton from "./VerifyButton";

export default function DGVerify() {
  const [onBooking, setOnBooking] = useState();
  return (
    <Container maxWidth="sm">
      <Typography variant="p" component="p" align="center" marginTop={5}>
        Is the caller on the booking or the Direct Info
      </Typography>
      <Grid container spacing={2} align="center" marginTop={3}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setOnBooking(true);
            }}
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setOnBooking(false);
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>
      {onBooking == true && <OnBooking />}
      {onBooking == false && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" align="center" marginTop={5}>
            You must do a full verification. Booking#, Ship and Sail date, PIN#.
            If caller is missing pin# verify all names and dates of birth
          </Typography>

          <VerifyButton />
        </Container>
      )}
    </Container>
  );
}
