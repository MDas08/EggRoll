import React from "react";
import "../App.css";
import Arrow from "../icons/projdesc.svg";
import Book from "../icons/book.svg";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="projdesc">
        <div className="projtitle">
          <p className="project">PROJECT</p>
          <p className="description">DESCRIPTION</p>
          <img src={Arrow} alt="" />
        </div>
        <div className="container2">
          <img src={Book} alt="" className="book" />
          <p className="centered">
            We're 4 college students who have been through some tough classes,
            so we wanted to make a website that makes them easier for us. Often
            we'll have days that we just don't feel like making notes or the
            teacher is going too fast for us. So we created EggRoll to make the
            notes for us. EggRoll is your new notes-buddy who will record your
            lectures and make notes, so you don't have to worry about missing
            something while studying!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
