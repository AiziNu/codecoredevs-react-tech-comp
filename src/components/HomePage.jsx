import React from "react";
import Button from "./Button";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Wellcome to Our Tech Studio</h1>
      <p>IT'S NICE TO SEE YOU HERE</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GERT STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          EXPLORE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
