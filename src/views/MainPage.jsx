import BookingHeader from "../components/BookingHeader";
import { Grid, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import StepperComponent from "../components/StepperComponent";
import ChatPF from "../components/ChatPF";
import ToolTabController from "../components/ToolTabController";
import CallFlow from "../features/callFlow/CallFlow";
import CallFlowControls from "../features/callFlow/components/CallFlowControls";
import IKnow from "../components/IKnow";

function MainPage() {
  return (
    <Box>
      <NavBar />
      <StepperComponent />
      <Grid
        container
        spacing={1}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={1} alignItems={"center"} justifyContent={"center"}>
          <Box paddingBottom={1} display={{ xs: "block", md: "none" }} margin={1}>
            <BookingHeader />
          </Box>
          <Box paddingTop={1} display={{ xs: "block", md: "none" }}>
            <CallFlowControls />
          </Box>
        </Grid>
        <Grid item>
          <Grid item xs={1}></Grid>
          <Grid
            container
            spacing={{ md: 1 }}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent={"center"}
            
          >
            <Grid item lg={6}>
              <Box>
                <Box display={{ xs: "none", md: "block" }} paddingTop={1}>
                  <Box paddingBottom={4} margin={1}>
                    <BookingHeader />
                  </Box>
                  <CallFlowControls />
                </Box>
                <CallFlow />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <ToolTabController />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ChatPF />
      <IKnow />
    </Box>
  );
}

export default MainPage;
