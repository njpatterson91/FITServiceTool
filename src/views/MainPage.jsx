import BookingHeader from "../components/BookingHeader";
import { Grid, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import StepperComponent from "../components/StepperComponent";
import ChatPF from "../components/ChatPF";
import ToolTabController from "../components/ToolTabController";
import CallFlow from "../features/callFlow/CallFlow";
import CallFlowControls from "../features/callFlow/components/CallFlowControls";

function MainPage() {
  return (
    <>
      <NavBar />
      <StepperComponent />
      <Grid
        container
        spacing={1}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={1} alignItems={"center"} justifyContent={"center"}>
          <Box paddingBottom={1} display={{ xs: "block", md: "none" }}>
            <BookingHeader />
          </Box>
          <Box paddingTop={1} display={{ xs: "block", md: "none" }}>
            <CallFlowControls />
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={{ md: 1 }}
            direction={{ xs: "column", md: "row" }}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Grid item lg={6}>
              <Box>
                <Box display={{ xs: "none", md: "block" }} paddingTop={2}>
                  <Box paddingBottom={4}>
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
    </>
  );
}

export default MainPage;
