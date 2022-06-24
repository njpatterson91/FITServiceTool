import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <HashRouter>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </RecoilRoot>
);
