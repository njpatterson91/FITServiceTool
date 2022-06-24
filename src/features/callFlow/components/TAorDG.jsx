import { customerInfo } from "../../../store/atoms";
import { useRecoilState } from "recoil";
import TAVerify from "./TAVerify";
import DGVerify from "./DGVerify";

export default function TAorDG() {
  const [customer] = useRecoilState(customerInfo);
  return (
    <>
      {customer.bookingType === "TA" && <TAVerify />}
      {customer.bookingType === "DG" && <DGVerify />}
    </>
  );
}
