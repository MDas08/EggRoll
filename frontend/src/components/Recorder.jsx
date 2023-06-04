import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "../App.css";
import MicIcon from "../icons/mic.jpg";
import { TiMicrophone } from "react-icons/ti";
import Vector from "../icons/Vector.svg";
import Copy from "../icons/copy.svg";
import Clear from "../icons/clearpage.svg";
import StopRec from "../icons/stoprec.svg";
const Recorder = () => {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum ea sint, ex neque nam possimus quisquam pariatur rem autem enim blanditiis veritatis similique fuga incidunt veniam eaque, atque aut suscipit nihil unde necessitatibus? Facere ea iusto dignissimos magnam libero, nisi vero? Nam illum consequatur dignissimos autem a adipisci explicabo quae reprehenderit amet dolores corrupti natus in minus debitis, quas modi aliquam ab. Recusandae hic eaque quis quisquam perspiciatis, nesciunt labore sunt dolorem facilis tempore corporis amet consequatur veniam cum.";
  const [isRec, setIsRec] = useState(false);
  const [boxtext, setText] = useState(text);
  return (
    <div className="recorder">
      <div className="auto-save">
        <input type="checkbox" name="" id="" className="checkbox" />
        Auto Save
      </div>
      <div className="main-body">
        <div className="clear-text">
          <img
            src={Clear}
            alt=""
            onClick={(text) => {
              setText("");
            }}
          />
        </div>
        <div className="text-box" id="text-box">
          {boxtext}
        </div>
        <div>
          <img
            src={Copy}
            className="copy-btn"
            alt=""
            onClick={() => {
              navigator.clipboard.writeText(boxtext);
            }}
          />
          <ReactMediaRecorder
            audio
            render={({
              status,
              startRecording,
              stopRecording,
              mediaBlobUrl,
              isRecording,
            }) => (
              <div className="btn">
                {!isRec && (
                  <button
                    className="record-btn"
                    onClick={() => {
                      startRecording();
                      setIsRec(true);
                    }}
                  >
                    <img src={Vector} alt="" />
                  </button>
                )}
                {isRec && (
                  <button
                    className="stop-btn"
                    onClick={() => {
                      stopRecording();
                      setIsRec(false);
                    }}
                  >
                    <img src={StopRec} alt="" />
                  </button>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Recorder;
