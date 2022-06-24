import { Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import ContactsPage from "./views/ContactsPage";
import { Paper } from "@mui/material";

function App() {
  return (
    <Paper
      style={{ height: "100vh", width: "100%", margin: "0", borderRadius: "0" }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      {/* <MainPage /> */}
    </Paper>
  );
}

export default App;
