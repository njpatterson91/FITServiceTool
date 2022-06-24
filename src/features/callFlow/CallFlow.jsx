import { stage } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import OpeningScript from "./components/OpeningScript";
import TAorDG from "./components/TAorDG";
import VerifyingInfo from "./components/VerifyingInfo";
import ServiceCall from "./components/ServiceCall";
import DocumentCallStep from "./components/DocumentCallStep";
import ClosingandSurvey from "./components/ClosingandSurvey";

export default function CallFlow() {
  const step = useRecoilValue(stage);
  switch (step) {
    case 0:
      return <OpeningScript />;
    case 1:
      return <TAorDG />;
    case 2:
      return <VerifyingInfo />;
    case 3:
      return <ServiceCall />;
    case 4:
      return <DocumentCallStep />;
    case 5:
      return <ClosingandSurvey />;
    default:
      console.log("End of script reached");
  }
}
