import React from "react";
import { Navbar, HeroForCom, Projects, Project, Footer } from "../components";
import { BiHomeAlt } from "react-icons/bi";

const ProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <HeroForCom titles="Home Visit" icon={<BiHomeAlt />} headings="HOME" />
      <Projects />
      <Project />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
