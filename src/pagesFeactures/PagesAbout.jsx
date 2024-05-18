import React from "react";
import {
  Navbar,
  HeroForCom,
  MainServices,
  MainAbout,
  MainRead,
  MainStep,
  Footer,
} from "../components";
import { HomeBlog, HomeClient } from "../homeFeatures";
import { BiHomeAlt } from "react-icons/bi";

const PagesAbout = () => {
  return (
    <div>
      <Navbar />
      <HeroForCom
        headings=" About Us"
        icon={<BiHomeAlt />}
        titles=" Our About"
      />
      <MainAbout />
      <MainServices />
      <MainRead />
      <HomeClient />
      <MainStep />
      <HomeBlog />
      <Footer />
    </div>
  );
};

export default PagesAbout;
