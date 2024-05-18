import React from "react";
import "./Angioplasty.css";
import { Navbar, HeroForCom, Footer } from "../components";
import { BiHomeAlt } from "react-icons/bi";
import { ServiceLeftbar, ServiceRightbar } from "../serviceComponents";

const Cardiology = () => {
  return (
    <div className="Angioplasty">
      <Navbar />
      <HeroForCom
        titles="CARDIOLOGY SERVICES"
        icon={<BiHomeAlt />}
        headings="CARDIOLOGY SERVICES"
      />
      <div className="Angioplasty__container">
        <ServiceLeftbar className="Angioplastyleft" />
        <ServiceRightbar className="AngioplastyRight" />
      </div>
      <Footer />
    </div>
  );
};

export default Cardiology;
