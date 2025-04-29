import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStory from "./pages/OurStory";
import Reservation from "./pages/Reservations";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation />} /> 
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
