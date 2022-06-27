import { customerInfo } from "../../../store/atoms";
import { useRecoilValue } from "recoil";
import { Paper, Typography } from "@mui/material";

export default function ClosingandSurvey() {
  const customer = useRecoilValue(customerInfo);
  return (
    <>
      {customer.bookingType === "" && (
        <Paper style={{ margin: "4%", padding: "3px" }} elevation={10}>
          <div
            style={{
              backgroundColor: "purple",
              borderRadius: "5px",
            }}
          >
            <Typography>
              Please select Travel Advisor or Direct Guest from booking type to
              view appropriate scripting.
            </Typography>
          </div>
        </Paper>
      )}
      {customer.bookingType === "TA" && (
        <Paper style={{ margin: "4%", padding: "3px" }} elevation={10}>
          <div
            style={{
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            <Typography>
              It was a pleasure assisting you, can you please remain on this
              line for a brief survey about my service on this call? Have a
              FUn-TASTIC day!
            </Typography>
          </div>
        </Paper>
      )}
      {customer.bookingType === "DG" && (
        <Paper style={{ margin: "4%", padding: "3px" }} elevation={10}>
          <div
            style={{
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            <Typography>
              As a thank you for calling, we've arranged for you to receive an
              exciting discount offer from Hilton Grand Vacations which includes
              $200 towards a future carnival cruise. May i transfer you for
              those brief details
            </Typography>
            <Typography>
              If yes Transfer call to 70710 and remain on the line until the
              prompt that advises that the guest has been connected.
            </Typography>
            <Typography>
              If no say It was a pleasure assisting you, can you please remain
              on this line for a brief survey about my service on this call?
              Have a FUn-TASTIC day!
            </Typography>
          </div>
        </Paper>
      )}
    </>
  );
}
