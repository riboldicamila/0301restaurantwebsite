import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        {/*         <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
