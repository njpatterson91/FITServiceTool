import { Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import ContactsPage from "./views/ContactsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      {/* <MainPage /> */}
    </>
  );
}

export default App;
