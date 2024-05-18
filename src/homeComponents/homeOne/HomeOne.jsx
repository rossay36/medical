import { Link } from "react-router-dom";

import React from "react";
import {
  HomeAbout,
  HomeAppointment,
  HomeBlog,
  HomeClient,
  HomeFacilities,
  HomeHero,
  HomePortfolio,
  HomeServices,
  HomeSteps,
  HomeTable,
  HomeTeams,
  HomeKnowAbout,
} from "../../homeFeatures";
import { Navbar, Footer } from "../../components";

import "./HomeOne.css";

const HomeOne = () => {
  return (
    <div className="HomeOne">
      <Navbar />
      <HomeHero id="HomeHero " />
      <HomeTable id="HomeTable" />
      <HomeKnowAbout id="HomeKnowAbout" />
      <HomeFacilities id="HomeFacilities" />
      <HomeAbout id="HomeAbout" />
      <HomeServices id="HomeServices" />
      <HomePortfolio id="HomePortfolio" />
      <HomeSteps id="HomeSteps" />
      <HomeTeams id="HomeTeams" />
      <HomeAppointment id="HomeAppointment" />
      <HomeClient id="HomeClient" />
      <HomeBlog id="HomeBlog" />
      <Footer />
      <div className="HomeOne__Link"></div>
    </div>
  );
};

export default HomeOne;
