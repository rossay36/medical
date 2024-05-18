import React from "react";
import "./Angioplasty.css";
import { Navbar, HeroForCom, Footer } from "../components";
import { BiHomeAlt } from "react-icons/bi";
import { ServiceLeftbar, ServiceRightbar } from "../serviceComponents";

const Dental = () => {
  return (
    <div className="Angioplasty">
      <Navbar />
      <HeroForCom
        titles="DENTAL SERVICES"
        icon={<BiHomeAlt />}
        headings="DENTAL SERVICES"
      />
      <div className="Angioplasty__container">
        <ServiceLeftbar className="Angioplastyleft" />
        <ServiceRightbar className="AngioplastyRight" />
      </div>
      <Footer />
    </div>
  );
};

export default Dental;
