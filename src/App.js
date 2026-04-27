import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroNavbar from "./components/HeroNavbar";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import AboutUs from "./components/AboutUs";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import HeroHome from "./home/herohome";
import HomeService from "./home/homeservice";
import Contact from "./contact/contact";


function App() {
  return (
    <div className="App">
      <HeroNavbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroHome />
            <HomeService />
          </>
        } />

         <Route path="/service" element={
          <>
            <HeroSection />
            <ServicesGrid />
            <ContactCTA />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


 {/* <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroHome />
                <HomeService />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes> */}


      
      <Footer />
    </div>
  );
}

export default App;