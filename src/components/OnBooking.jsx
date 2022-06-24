import { Container, Grid, Typography, Button } from "@mui/material";

import { useState } from "react";
import OnBookingBookingNumber from "./OnBookingBookingNumber";
import VerifyButton from "./VerifyButton";

export default function OnBooking() {
  const [onBooking, setOnBooking] = useState();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} align="center" marginTop={3}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setOnBooking(true);
            }}
          >
            On Booking
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setOnBooking(false);
            }}
          >
            Direct Info
          </Button>
        </Grid>
      </Grid>
      {onBooking === true && <OnBookingBookingNumber />}
      {onBooking === false && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" margin={1} align="center">
            Caller needs to provide: Booking#, Ship and Sail Date, PIN#. If the
            caller is missing the pin ALL Names and DOB
          </Typography>

          <VerifyButton />
        </Container>
      )}
    </Container>
  );
}
