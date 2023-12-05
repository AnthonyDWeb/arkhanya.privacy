import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Homepage } from "./pages";
import Gameraid from "./pages/gameraid";

function App() {
  const path = window.location.pathname;
  console.log("path",path);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/arkhanya.privacy" element={<Homepage />} />
        <Route path="/arkhanya.privacy/gameraid" element={<Gameraid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;