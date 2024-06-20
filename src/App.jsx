import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ManicTime from "./pages/ManicTime.jsx";
import AimlApi from "./pages/AimlApi.jsx";
import Codehooks from "./pages/Codehooks.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/manictime" element={<ManicTime />} />
        <Route path="/aimlapi" element={<AimlApi />} />
        <Route path="/codehooks" element={<Codehooks />} />
      </Routes>
    </Router>
  );
}

export default App;
