import React, { useRef, useState } from "react";
import "./App.css";
import Recorder from "./components/Recorder";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";
import AboutUs from "./components/AboutUs";
import Logo from "./icons/Logo.svg";
import DemoVideo from "./components/DemoVideo";
import Team from "./components/Team";
import Instagram from "./icons/insta.png";
import Facebook from "./icons/fb.png";
import Twitter from "./icons/twitter.png";
function App() {
  const help = useRef(null);
  const about = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="header">
        <div className="top-left">
          <img src={Logo} alt="" className="logo" />
          <h2
            className="main-title
          "
          >
            EGGROLL
          </h2>
        </div>
        <ul>
          <div className="top-right">
            <li className="list" onClick={() => scrollToSection(help)}>
              How To Use?
            </li>
            <li className="list" onClick={() => scrollToSection(about)}>
              About Us
            </li>
          </div>
        </ul>
      </div>
      <Recorder></Recorder>
      <div ref={help}>
        <HowToUse></HowToUse>
      </div>
      <div ref={about}>
        <AboutUs></AboutUs>
      </div>
      <DemoVideo></DemoVideo>
      <Team></Team>
      <div className="footer">
        <div className="footer-main">
          <h5>Reach Us</h5>
          <div className="options">
            <h5 onClick={() => scrollToSection(help)}>How To Use?</h5>
            <h5 onClick={() => scrollToSection(about)}>About Us</h5>
          </div>
        </div>
        <div className="footer-main">
          <div className="contact">
            <p>+91 1234 567 890</p>
            <p>contact@EggRoll.com</p>
          </div>
          <div className="socials">
            <img src={Instagram} alt="" className="social-logo" />
            <img src={Facebook} alt="" className="social-logo" />
            <img src={Twitter} alt="" className="social-logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
