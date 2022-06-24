import BookingHeader from "../components/BookingHeader";
import { infoCards } from "../store/atoms";
import { useRecoilState } from "recoil";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import StepperComponent from "../components/StepperComponent";
import ChatPF from "../components/ChatPF";
import ToolTabController from "../components/ToolTabController";
import CallFlow from "../features/callFlow/CallFlow";

function MainPage() {
  const [stepInfo] = useRecoilState(infoCards);

  console.log(stepInfo);

  return (
    <>
      <NavBar />
      <StepperComponent />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <BookingHeader />
          <CallFlow />
        </Grid>
        <Grid item xs={6}>
          <ToolTabController />
        </Grid>
      </Grid>
      <ChatPF />
    </>
  );
}

export default MainPage;
