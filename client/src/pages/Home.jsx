import React from "react";
import "./styles/home.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home_container">
        {/* This is Header section */}
        <div>
          <Header />
        </div>
        {/* This is Hero section */}
        <div>
          <HeroSection />
        </div>
        {/* This is Navigation section */}
        <div>
          <Navbar/>
        </div>
        {/* This is Blog section */}
        <div>Blog Section</div>
        {/* This is News letter section */}
        <div>News letter Section</div>
        {/* This is Footer section */}
        <div>
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
