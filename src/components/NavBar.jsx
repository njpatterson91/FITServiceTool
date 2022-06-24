import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import { Button, IconButton } from "@mui/material";
import { verified, customerInfo, stage } from "../store/atoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [verifiedStatus, setVerifiedStatus] = useRecoilState(verified);
  const setCustomer = useSetRecoilState(customerInfo);
  const setStep = useSetRecoilState(stage);

  const resetState = () => {
    setVerifiedStatus(false);
    setCustomer({
      name: "",
      bookingNumber: "",
      bookingType: "",
      notes: "",
    });
    setStep(0);
  };
  const navigate = useNavigate();
  return (
    <Box marginBottom>
      <AppBar
        position="static"
        style={{ backgroundColor: verifiedStatus ? "blue" : "red" }}
      >
        <Toolbar>
          <IconButton>
            <HomeIcon
              onClick={() => {
                navigate("/");
              }}
            />
          </IconButton>

          <Button
            variant="p"
            component="p"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              resetState();
              navigate("/");
            }}
          >
            New Contact
          </Button>
          <Button
            variant="p"
            component="p"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate("/contacts");
            }}
          >
            View Prevous Contact's
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
