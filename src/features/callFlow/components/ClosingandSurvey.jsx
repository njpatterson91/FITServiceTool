import { customerInfo } from "../../../store/atoms";
import { useRecoilValue } from "recoil";
import { Paper, Typography } from "@mui/material";
import CallFlowScriptView from "./CallFlowScriptView";
import scripting from "../../../json/scripting.json";

export default function ClosingandSurvey() {
  const customer = useRecoilValue(customerInfo);
  return (
    <>
      {customer.bookingType === "" && (
        <CallFlowScriptView script={scripting.warningClosing} />
      )}
      {customer.bookingType === "TA" && (
        <CallFlowScriptView script={scripting.closingTA} />
      )}
      {customer.bookingType === "DG" && (
        <CallFlowScriptView script={scripting.closingDG} />
      )}
    </>
  );
}
