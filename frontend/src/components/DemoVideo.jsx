import React from "react";
import Circle from "../icons/demovid.svg";
import "../App.css";
const DemoVideo = () => {
  return (
    <div className="Demo-vid">
      <div>
        <h3 className="demo-title">DEMO VIDEO</h3>
        <img src={Circle} alt="" className="demo-circle" />
      </div>
      <div className="vid-container">
        <div className="vid">
          <video src=""></video>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
