// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProFeatures from "./components/ProFeatures";
import Results from "./components/Result";
import Pricing from "./components/Pricing";
import Login from "./components/Login";
import GrammarCheck from "./components/GrammarCheck";
import TextCheckerBox from "./components/TextCheckerBox"
import Tools from "./components/Tools"
import About from "./components/About";
import Blog from "./components/Blog"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={
          <>
          <HeroSection/>
          <About/>
          <Blog/>
          <Footer/>
          </>
        }/>
        
        
       
      
        <Route path="/proFeatures" element={<ProFeatures />} />
        <Route path="/results" element={<Results />} />
        <Route path="/pricing" element={<Pricing />} />
         <Route path="/Login" element={<Login/>} />
         <Route path="/GrammerCheck"element={<GrammarCheck/>}/>
         <Route path="/TextCheckerBox"element={<TextCheckerBox/>}/>
         <Route path="/Tools"element={<Tools/>}/>
      </Routes>
    </Router>
  );
}

export default App;
