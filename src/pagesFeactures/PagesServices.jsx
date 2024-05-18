import React from "react";
import {
  Navbar,
  HeroForCom,
  MainServices,
  MainRead,
  Footer,
} from "../components";
import { HomeFacilities, HomeSteps, HomeBlog } from "../homeFeatures";
import { BiHomeAlt } from "react-icons/bi";

const PagesServices = () => {
  return (
    <div>
      <Navbar />
      <HeroForCom
        titles="Our Services"
        icon={<BiHomeAlt />}
        headings={"Our Services"}
      />
      <HomeFacilities />
      <MainServices />
      <HomeSteps />
      <MainRead />
      <HomeBlog />
      <Footer />
    </div>
  );
};

export default PagesServices;
