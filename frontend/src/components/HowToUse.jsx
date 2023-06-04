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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae
          optio dolore est error at blanditiis dignissimos! Illo, cupiditate
          molestias iure esse natus nesciunt quidem officiis facere quas
          architecto, dicta, laborum commodi maxime laudantium.
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
