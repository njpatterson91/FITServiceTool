import BookingHeader from "../components/BookingHeader";
import { stage, infoCards } from "../store/atoms";
import { useRecoilState } from "recoil";
import { Grid, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import NotesAndLinks from "../components/NotesAndLinks";
import TAorDG from "../components/TAorDG";
import StepperComponent from "../components/StepperComponent";
import VerifyingInfo from "../components/VerifyingInfo";
import ServiceCall from "../components/ServiceCall";
import DocumentCallStep from "../components/DocumentCallStep";
import ClosingandSurvey from "../components/ClosingandSurvey";
import ChatPF from "../components/ChatPF";
import ToolTabController from "../components/ToolTabController";

function MainPage() {
  const [step] = useRecoilState(stage);
  const [stepInfo] = useRecoilState(infoCards);

  console.log(stepInfo);
  return (
    <>
      <NavBar />
      <StepperComponent />
      <Grid container spacing={1}>
        {/* /Tools Section */}
        <Grid item xs={6}>
          <BookingHeader />
          {step === 0 && (
            <Paper style={{ margin: "5%" }}>
              <Typography margin>
                Thanks for calling Carnival, my name is ______. Who do I have
                the pleasure of speaking with?
              </Typography>
              <Typography margin>
                Thank you,___ TA/DG's_NAME___. May I please have your booking
                number?
              </Typography>
              <Typography margin>
                ** Proceed to pull up booking in Navigator.**
              </Typography>
              <Typography margin>
                ** While waiting on NAVI, can ask how your day is going etc. **
              </Typography>
            </Paper>
          )}
          {step === 1 && <TAorDG />}
          {step === 2 && <VerifyingInfo />}
          {step === 3 && <ServiceCall />}
          {step === 4 && <DocumentCallStep />}
          {step === 5 && <ClosingandSurvey />}
          {/* <TAorDG /> */}
        </Grid>
        {/* Useful links and notes */}
        <Grid item xs={6}>
          <ToolTabController />
          {/* <NotesAndLinks /> */}
        </Grid>
      </Grid>
      <ChatPF />
    </>
  );
}

export default MainPage;
