import { Container, Grid, Typography, Button } from "@mui/material";
import VerifyButton from "./VerifyButton";
import { useState } from "react";

export default function OnBookingPin() {
  const [pinVerified, setPinVerified] = useState();
  return (
    <Container maxWidth="sm">
      <Typography variant="p" component="p" margin={1} align="center">
        Did they provide correct PIN#
      </Typography>
      <Grid container spacing={2} align="center" marginTop={3}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setPinVerified(true);
            }}
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setPinVerified(false);
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>
      {pinVerified == true && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" margin={1} align="center">
            Customer Fully Verified. Recap ship and sail date.
          </Typography>

          <VerifyButton />
        </Container>
      )}
      {pinVerified == false && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" margin={1} align="center">
            Caller Provides: Booking#, Ship and Sail date, One name and DOB.
            You: Refresh on Pin or Set pin up.
          </Typography>

          <VerifyButton />
        </Container>
      )}
    </Container>
  );
}
