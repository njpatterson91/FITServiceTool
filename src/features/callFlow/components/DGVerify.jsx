import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import { useState } from "react";
import OnBooking from "../../../components/OnBooking";
import VerifyButton from "../../../components/VerifyButton";

const verifyFlow = {
  onBooking: {
    nestSteps: {
      question: "Is the caller on the booking or the Direct Info",
      button1: {
        text: "On Booking",
        nextSteps: {
          question: "Did they provide the Booking Number",
          button1: {
            text: "Yes",
            nextSteps: {
              question: "Did they provide the pin",
              button1: {
                text: "Yes",
                nextSteps: {
                  button1: {
                    text: "verify",
                  },
                },
              },
              button2: {
                text: "No",
                question:
                  "Caller provides: Name of ship and date of sailing, and their full name and date of birth.",
              },
            },
          },
          button2: {
            text: "No",
            nextSteps: {
              question:
                "Caller needs to provide: Ship and Sail date, one name and dob, PIN#. You Provide Booking#",
            },
          },
        },
      },
      button2: {
        text: "Direct Info",
        nextSteps: {
          question:
            "Caller needs to provide: Booking#, Ship and Sail Date, PIN#. If the caller is missing the pin ALL Names and DOB",
        },
      },
    },
  },
  notOnBooking: {},
};

export default function DGVerify() {
  const [onBooking, setOnBooking] = useState();
  return (
    <Container maxWidth="sm" style={{ overflow: "auto", height: 250 }}>
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
      {onBooking === true && <OnBooking />}
      {onBooking === false && (
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
