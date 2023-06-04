import React from "react";
import "../App.css";
import Line1 from "../icons/howtouse1.svg";
import Line2 from "../icons/howtouse2.svg";
const HowToUse = () => {
  return (
    <div className="howto">
      <h4 className="title">
        HOW TO <span className="usetitle">USE?</span>{" "}
      </h4>
      <img src={Line1} alt="" className="howtoline1" />
      <img src={Line2} alt="" className="howtoline2" />
      <div className="container">
        <div className="content">
          1. To record audio from your lecture, click on the microphone icon.{" "}
          <br />
          2. Once done recording, click on the icon again to stop recording and
          download the audio file onto your desktop. <br />
          3. Upload the audio file and click submit. <br />
          4. Keywords from the lecture will be used to obtain information
          relevant to your lecture which will be displayed in the textbox
          provided. <br />
          5. Click the button on the bottom right of the box to copy it to your
          clipboard. To Clear the text box, click on the button at the top left
          of the box.
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
