import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import TextCheckerBox from "./components/TextCheckerBox";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
     
      <TextCheckerBox />
    </>
  );
}

export default App;
