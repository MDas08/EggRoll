import React from "react";
import "../App.css";
import StarSmall from "../icons/ourteam.svg";
import Sparkles from "../icons/sparkles.svg";
import Memb1 from "../icons/memb1.svg";
import Memb2 from "../icons/memb2.svg";
import Memb3 from "../icons/memb3.svg";
import Memb4 from "../icons/memb4.svg";
const Team = () => {
  return (
    <div className="team">
      <img src={Sparkles} alt="" className="team-sparkles" />
      <h3 className="demo-title">OUR TEAM</h3>
      <img src={StarSmall} alt="" className="star-small" />
      <div className="cards">
        <div className="card-item">
          <img src={Memb1} alt="" />
        </div>
        <div className="card-item">
          <img src={Memb2} alt="" />
        </div>
        <div className="card-item">
          <img src={Memb3} alt="" />
        </div>
        <div className="card-item">
          <img src={Memb4} alt="" />
        </div>
      </div>
      <div className="cards">
        <div className="card-text">
          DIYA <span className="team-span">DAS</span>
          <br />
          <div className="roles r1">Back-End</div>
        </div>
        <div className="card-text t2">
          KUSHAL <span className="team-span">CHAND</span>
          <br />
          <div className="roles r2">Back-End</div>
        </div>
        <div className="card-text t3">
          VEDANG <span className="team-span">VATSAL</span>
          <br />
          <div className="roles r3">Front-End</div>
        </div>
        <div className="card-text t4">
          ASHISH <span className="team-span">KUMAR</span>
          <br />
          <div className="roles r4">UI/UX</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
