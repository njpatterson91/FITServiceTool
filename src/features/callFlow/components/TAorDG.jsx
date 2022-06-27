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
        <Paper style={{ margin: "4%", padding: "2%" }} elevation={10}>
          <Typography>
            ** Please select Travel Advisor or Direct Guest from booking type to
            view appropriate scripting. **
          </Typography>
        </Paper>
      )}
      {customer.bookingType === "TA" && <TAVerify />}
      {customer.bookingType === "DG" && <DGVerify />}
    </>
  );
}
