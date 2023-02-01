import { customerInfo } from "../../../store/atoms";
import { useRecoilState } from "recoil";
import TAVerify from "./TAVerify";
import DGVerify from "./DGVerify";
import scripting from "../../../json/scripting.json"
import CallFlowScriptView from "./CallFlowScriptView";

export default function TAorDG() {
  const [customer] = useRecoilState(customerInfo);
  return (
    <>
      {customer.bookingType === "" && (
        <CallFlowScriptView script={scripting.taOrdg} />
      )}
      {customer.bookingType === "TA" && <TAVerify />}
      {customer.bookingType === "DG" && <DGVerify />}
    </>
  );
}
