import { customerInfo } from "../../../store/atoms";
import { useRecoilState } from "recoil";
import { Typography, Paper } from "@mui/material";
import TAVerify from "./TAVerify";
import DGVerify from "./DGVerify";

export default function TAorDG() {
  const [customer] = useRecoilState(customerInfo);
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
      {customer.bookingType === "TA" && <TAVerify />}
      {customer.bookingType === "DG" && <DGVerify />}
    </>
  );
}
