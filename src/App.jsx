import React from "react";
import { Navbar } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomeOne,
  HomeEight,
  HomeFive,
  HomeFour,
  HomeNine,
  HomeSeven,
  HomeSix,
  HomeThree,
  HomeTwo,
} from "./homeComponents";

import {
  PagesAbout,
  PagesApointment,
  PagesDoctors,
  PagesPlans,
  PagesProcess,
  PagesServices,
  PagesWorkingHours,
} from "./pagesFeactures";

import { Angioplasty, Cardiology, Dental } from "./serviceFeatures";

import { Mansory, ProjectDetails, Standard } from "./projectFeature";

import { Blog, Blogs } from "./blogFeactures";

import { Contacts } from "./contactFeature";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/homeTwo" element={<HomeTwo />} />
          <Route path="/homeThree" element={<HomeThree />} />
          <Route path="/homeFour" element={<HomeFour />} />
          <Route path="/homeFive" element={<HomeFive />} />
          <Route path="/homeSix" element={<HomeSix />} />
          <Route path="/homeSeven" element={<HomeSeven />} />
          <Route path="/homeEight" element={<HomeEight />} />
          <Route path="/homeNine" element={<HomeNine />} />
          <Route path="/pagesAbout" element={<PagesAbout />} />
          <Route path="/pagesApointment" element={<PagesApointment />} />
          <Route path="/pagesDoctors" element={<PagesDoctors />} />
          <Route path="/pagesPlans" element={<PagesPlans />} />
          <Route path="/PagesProcess" element={<PagesProcess />} />
          <Route path="/pagesServices" element={<PagesServices />} />
          <Route path="/pagesWorkingHours" element={<PagesWorkingHours />} />
          <Route path="/angioplasty" element={<Angioplasty />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/mansory" element={<Mansory />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
