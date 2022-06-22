import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { verified, stage } from "../store/atoms";

export default function VerifyButton() {
  const [, setVerifiedStatus] = useRecoilState(verified);
  const [step, setStep] = useRecoilState(stage);
  return (
    <Button
      onClick={() => {
        setVerifiedStatus(true);
        setStep(step + 1);
      }}
    >
      Verify
    </Button>
  );
}
