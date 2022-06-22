import { Container, Grid, Typography, Button } from "@mui/material";
import VerifyButton from "./VerifyButton";

import { useState } from "react";

export default function TAVerify() {
  const [takeover, setTakeover] = useState();
  return (
    <Container maxWidth="sm">
      <Typography variant="p" component="p" align="center" marginTop={5}>
        Is the TA calling to take over Direct Booking
      </Typography>
      <Grid container spacing={2} align="center" marginTop={3}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setTakeover(true);
            }}
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setTakeover(false);
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>
      {takeover === true && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" align="center" marginTop={5}>
            Caller Provides: Booking#, Ship and Sail Date, ALL Names and DOB,
            PIN#, Cabin#
          </Typography>

          <VerifyButton />
        </Container>
      )}
      {takeover === false && (
        <Container maxWidth="sm" align="center">
          <Typography variant="p" component="p" align="center" marginTop={5}>
            Caller provides CLIA/IATA. If CLIA/IATA is not on the booking caller
            provides agency phone#
          </Typography>

          <VerifyButton />
        </Container>
      )}
    </Container>
  );
}
