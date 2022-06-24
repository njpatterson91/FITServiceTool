import { Grid, Button } from "@mui/material";
import { stage } from "../../../store/atoms";
import { useRecoilState } from "recoil";

export default function CallFlowControls() {
  const [step, setStep] = useRecoilState(stage);
  return (
    <Grid container spacing={2} align="Center">
      <Grid item xs={6}>
        <Button
          onClick={() => {
            if (step === 0) {
              return;
            }
            setStep(step - 1);
          }}
        >
          Previous Step
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            if (step === 5) {
              return;
            }
            setStep(step + 1);
          }}
        >
          Next Step
        </Button>
      </Grid>
    </Grid>
  );
}
