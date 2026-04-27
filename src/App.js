import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroNavbar from "./components/HeroNavbar";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import AboutUs from "./components/AboutUs";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroNavbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ServicesGrid />
            <ContactCTA />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;