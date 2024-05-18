import React from "react";
import { Navbar, Text, Footer, HeroForCom } from "../components";
import { HomeSteps, HomeTeams, HomeClient, HomeBlog } from "../homeFeatures";
import { BiHomeAlt } from "react-icons/bi";

const PagesProcess = () => {
  return (
    <div>
      <Navbar />
      <HeroForCom
        titles="Our Process"
        icon={<BiHomeAlt />}
        headings="Our  Process"
      />
      <HomeSteps />
      <HomeTeams />
      <Text />
      <HomeClient />
      <HomeBlog />
      <Footer />
    </div>
  );
};

export default PagesProcess;
