import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStory from "./pages/OurStory";
import Reservation from "./pages/Reservations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
