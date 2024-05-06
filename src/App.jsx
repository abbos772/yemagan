import { useState } from "react";
import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Create from "./components/pages/Create/Create";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
