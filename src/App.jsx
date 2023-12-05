import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./routes";

function App() {
  const path = window.location.pathname;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path} element={<Navigation path={path} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;