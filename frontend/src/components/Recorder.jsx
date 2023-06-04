import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "../App.css";
import MicIcon from "../icons/mic.jpg";
import { TiMicrophone } from "react-icons/ti";
import Vector from "../icons/Vector.svg";
import Copy from "../icons/copy.svg";
import Clear from "../icons/clearpage.svg";
import StopRec from "../icons/stoprecfinal.svg";
import axios from "axios";
const Recorder = () => {
  let text;
  const [isRec, setIsRec] = useState(false);
  const [boxtext, setText] = useState("nothing yet");

  // npm install axios
  // Crt + C to stop the server
  // Also like when you type 'fron' you can press tab and it'll autocomplete

  // const handleSave = async () => {
  //   const audiofile = new File([audioBlob], "audiofile.webm", {
  //     type: "audio/webm",
  //   });

  //   console.log(audiofile);

  //   const formData = new FormData();

  //   formData.append("file", audiofile);

  //   const result = await axios.post(`<your server post end point>`, formData, {
  //     crossDomain: true,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      axios.defaults.baseURL = 'http://localhost:5000';
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const formData = new FormData(event.target);
      axios.post('/form', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          const receivedValue = response.data;
          setText(receivedValue)
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

 
  return (
    <div className="recorder">
      <div className="auto-save">
        <input type="checkbox" name="" id="" className="checkbox" />
        Auto Save
      </div>
      <div className="language">
        <select name="" id="" className="languages">
          <option value="">English,US</option>
          <option value="">English,UK</option>
          <option value="">German</option>
          <option value="">Spanish</option>
        </select>
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
                      handleSave();
                    }}
                  >
                    <img src={StopRec} alt="" className="stop-logo" />
                  </button>
                )}
                <video src={mediaBlobUrl} controls autoPlay loop />
              </div>
            )}
          />
        </div>
      </div>
      <form action="http://localhost:5000/form" method="POST" onSubmit={handleSubmit}>
        <input type="file" name="file"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Recorder;
