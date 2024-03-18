import React from "react";
import "../css/topFooter.css";
import Door from "../assets/abc.png";
function TopFooter() {
  return (
    <>
      <div className="topFooterContainer">
        <img
          className="logo"
          src="https://d2x8ygf1qnoedj.cloudfront.net/images/Gamma_V1_Icon_only_4.gif"
          alt="Gamma Logo"
        />
        <img
          className="image"
          src="https://uploads-ssl.webflow.com/62e823626cd4fdd0e5dc1527/62e823626cd4fd359cdc15a8_Universe%20BG.png"
          alt="Universe Background"
        />
        <div className="content">
          <h1 className="headingTagline">
            <span className="openDoor">Open the door</span> <br />
            <span className="toanewuniverse">to a new universe</span>{" "}
          </h1>
          <p className="paraContent">
            More visual than a doc. More collaborative than a<br /> slide deck.
            More interactive than a video.
          </p>
          <button className="tryFreeButton">Try Gamma for free</button>
        </div>
        <div className="doorContainer">
          {" "}
          <div
            className="doorBackground"
            style={{ backgroundColor: "transparent" }}
          >
            <img className="imgDoor" src={Door} alt="Open the Door" />
          </div>
        </div>
      </div>
    </>
  );
}
export default TopFooter;
