import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { stage } from "../store/atoms";
import { useRecoilState } from "recoil";

const steps = [
  "Opening The Call",
  "Qualifying The Call",
  "Verifying/Adding Info",
  "Service Call",
  "Document Call",
  "Closing and Survey",
];

export default function StepperComponent() {
  const [step, setStep] = useRecoilState(stage);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
