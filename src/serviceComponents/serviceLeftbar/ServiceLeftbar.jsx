import React from "react";
import "./ServiceLeftbar.css";
import { TbMathGreater } from "react-icons/tb";
import nurse8 from "../../assets/nurse8.jpg";

const ServiceLeftbar = () => {
  return (
    <div className="ServiceLeftbar">
      <div className="ServiceLeftbar__box">
        <div className="ServiceLeftbar__rows">
          <p>ANGIOPLASTY SERVICES</p>

          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>CARDIOLOGY SERVICES</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>DENTAL SERVICES</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>Cadialiogy Services</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>Cadialiogy Services</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>Cadialiogy Services</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>Cadialiogy Services</p>
          <TbMathGreater />
        </div>
        <div className="ServiceLeftbar__rows">
          <p>Cadialiogy Services</p>
          <TbMathGreater />
        </div>
      </div>
      <div className="ServiceLeftbar__bottom">
        <h1>Raedy To Get Expert Of Our Services</h1>
        <button className="button">Our Expert +</button>
        <div className="ServiceLeftbar__img">
          <img src={nurse8} />
        </div>
      </div>
    </div>
  );
};

export default ServiceLeftbar;
