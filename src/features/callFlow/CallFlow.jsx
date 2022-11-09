import { stage } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import CallFlowScriptView from "./components/CallFlowScriptView";
import TAorDG from "./components/TAorDG";
import ClosingandSurvey from "./components/ClosingandSurvey";
import scripting from "../../json/scripting.json";

export default function CallFlow() {
  const step = useRecoilValue(stage);
  switch (step) {
    case 0:
      return <CallFlowScriptView script={scripting.opening} />;
    case 1:
      return <TAorDG />;
    case 2:
      return <CallFlowScriptView script={scripting.verifyAddInfo} />;
    case 3:
      return <CallFlowScriptView script={scripting.serviceCall} />;
    case 4:
      return <CallFlowScriptView script={scripting.documenting} />;
    case 5:
      return <ClosingandSurvey />;
    default:
      console.log("End of script reached");
  }
}
