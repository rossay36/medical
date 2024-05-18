import React from "react";
import "./ServiceRightbar.css";
import nurse7 from "../../assets/nurse7.jpg";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse3.jpg";
import { ImCheckmark } from "react-icons/im";
import { Toggling } from "../../components";

const ServiceRightbar = () => {
  return (
    <div className="ServiceRightbar">
      <div className="ServiceRightbar__img">
        <img src={nurse7} />
      </div>
      <div className="ServiceRightbar__center">
        <h2>Professional Medical Service Of Angioplasty</h2>
        <p>
          Medicate is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since.
        </p>
      </div>
      <div className="ServiceRightbar__groups">
        <div className="ServiceRightbar__box">
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
        </div>
        <div className="ServiceRightbar__box">
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
          <div className="ServiceRightbar__rows">
            <ImCheckmark className="ServiceRightbar__icon" />
            <p>Aliquam tincidunt nisi vitae nulla molestie</p>
          </div>
        </div>
      </div>

      <div className="ServiceRightbar__center">
        <h2>Advantage Angioplasty</h2>
        <p>
          Medicate is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since.
        </p>
      </div>
      <div className="ServiceRightbar__groups">
        <div className="ServiceRightbar__box">
          <img src={nurse2} />
        </div>
        <div className="ServiceRightbar__box">
          <img src={nurse3} />
        </div>
      </div>

      <div className="ServiceRightbar__center">
        <h2>Health Tips & Info</h2>
        <p>
          Medicate is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <Toggling />
    </div>
  );
};

export default ServiceRightbar;
