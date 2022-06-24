import { Container, Grid, Typography, Button } from "@mui/material";

import { useState } from "react";
import OnBookingPin from "./OnBookingPin";
import VerifyButton from "./VerifyButton";

export default function OnBookingBookingNumber() {
  const [bookingVerified, setBookingVerified] = useState();
  return (
    <Container maxWidth="sm">
      <Typography variant="p" component="p" margin={1} align="center">
        Did they provide the Booking Number
      </Typography>
      <Grid container spacing={2} align="center" marginTop={3}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setBookingVerified(true);
            }}
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setBookingVerified(false);
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>
      {bookingVerified === true && <OnBookingPin />}
      {bookingVerified === false && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" margin={1} align="center">
            Caller Provides: Ship and Sail date, one name and dob, PIN#. You
            Provide Booking#
          </Typography>

          <VerifyButton />
        </Container>
      )}
    </Container>
  );
}
