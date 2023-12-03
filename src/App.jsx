import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import { Gameraid } from "./pages/gameraid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="arkhanya.privacy" element={<Homepage />} />
        <Route path="arkhanya.privacy/gameraid" element={<Gameraid/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
