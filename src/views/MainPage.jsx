import BookingHeader from "../components/BookingHeader";
import { Grid, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import StepperComponent from "../components/StepperComponent";
import ChatPF from "../components/ChatPF";
import ToolTabController from "../components/ToolTabController";
import CallFlow from "../features/callFlow/CallFlow";
import CallFlowControls from "../features/callFlow/components/CallFlowControls";
import ToolTipModal from "../components/ToolTipModal";
function MainPage() {
  return (
    <>
      <NavBar />
      <StepperComponent />
      <Grid container spacing={1} direction={"column"}>
        <Grid item xs={6}>
          <Box sx={{ height: 350 }}>
            <BookingHeader />
            <CallFlow />
          </Box>
          <CallFlowControls />
        </Grid>
        <Grid item xs={6}>
          <ToolTabController />
        </Grid>
      </Grid>
      <ChatPF />
      <ToolTipModal />
    </>
  );
}

export default MainPage;
