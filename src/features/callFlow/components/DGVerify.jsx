import { Container, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { verified, stage } from "../../../store/atoms";
import verifyFlow from "../../../json/verifyFlow.json";

export default function DGVerify() {
  const [step, setStep] = useState(verifyFlow.DG.start);
  const [currentStage, setStage] = useRecoilState(stage);
  const verifyCaller = useSetRecoilState(verified);
  return (
    <Container maxWidth="sm" style={{ overflow: "auto", height: 250 }}>
      <Typography variant="p" component="p" align="center" marginTop={5}>
        {step.question}
      </Typography>

      <Grid container spacing={2} align="center" marginTop={3}>
        {step.verify === false && (
          <>
            {" "}
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  setStep(step.button1.nextSteps);
                }}
              >
                {step.button1.text}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  setStep(step.button2.nextSteps);
                }}
              >
                {step.button2.text}
              </Button>
            </Grid>{" "}
          </>
        )}
        {step.verify === true && (
          <Grid item xs={12}>
            <Button
              onClick={() => {
                verifyCaller(true);
                setStage(currentStage + 1);
              }}
            >
              Verify
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
