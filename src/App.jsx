import "./App.css";
import { use, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Business from "./components/business.jsx";
import Entertainment from "./components/entertainment.jsx";
import Health from "./components/health.jsx";
import Science from "./components/science.jsx";
import Sports from "./components/sports.jsx";
import Technology from "./components/technology.jsx";

function App() {
  function basicStyle() {
    document.body.style.backgroundColor = "#212949";
  }
  basicStyle();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Business />} />
          <Route exact path="/entertainment" element={<Entertainment />} />
          <Route exact path="/health" element={<Health />} />
          <Route exact path="/science" element={<Science />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
