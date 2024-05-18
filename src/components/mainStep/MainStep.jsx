import React from "react";
import "./MainStep.css";
import drawing from "../../assets/drawing.jpg";
import drawing2 from "../../assets/drawing2.jpg";
import drawing1 from "../../assets/drawing1.png";
import drawing3 from "../../assets/drawing3.png";

const MainStep = () => {
  return (
    <div className="MainStep">
      <div className="MainStep__heading">
        <h4>Our Steps</h4>
      </div>
      <div className="MainStep__title">
        <h1>Our Working Best Process</h1>
      </div>

      <div className="MainStep__col">
        <div className="MainStep__box">
          <div className="MainStep__img">
            <img src={drawing} />
            <span>01</span>
          </div>

          <div className="MainStep__box-text">
            <h3>Follow Up Check</h3>
            <p>There are many variations of </p>
            <p>passages Lorem Ipsum available</p>
          </div>
        </div>
        <div className="MainStep__box">
          <div className="MainStep__img">
            <img src={drawing3} />
            <span>02</span>
          </div>

          <div className="MainStep__box-text">
            <h3>Free Consultation</h3>
            <p>There are many variations of </p>
            <p>passages Lorem Ipsum available</p>
          </div>
        </div>
        <div className="MainStep__box">
          <div className="MainStep__img">
            <img src={drawing2} />
            <span>03</span>
          </div>

          <div className="MainStep__box-text">
            <h3>Schedule Date & Time</h3>
            <p>There are many variations of </p>
            <p>passages Lorem Ipsum available</p>
          </div>
        </div>
        <div className="MainStep__box">
          <div className="MainStep__img">
            <img src={drawing1} />
            <span>04</span>
          </div>

          <div className="MainStep__box-text">
            <h3>Arrival To DentiCare</h3>
            <p>There are many variations of </p>
            <p>passages Lorem Ipsum available</p>
          </div>
        </div>
      </div>
      <div className="MainStep__button">
        <button className="button">APOINTMENT+</button>
      </div>
    </div>
  );
};

export default MainStep;
