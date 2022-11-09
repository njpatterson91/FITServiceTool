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
      <Grid container spacing={1} direction={"column"}>
        <Grid item xs={1}>
          <Box paddingTop={1}>
            <CallFlowControls />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box>
            <BookingHeader />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <CallFlow />
          </Box>
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
