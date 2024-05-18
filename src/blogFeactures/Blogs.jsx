import React from "react";
import "./Blogs.css";
import { Navbar, HeroForCom, Footer } from "../components";
import { BiHomeAlt } from "react-icons/bi";
import { BlogersLeft, BlogersRight } from "../blogComponents";

const Blogs = () => {
  return (
    <div className="Blogs">
      <Navbar />
      <div className="Blogs__wrapper">
        <HeroForCom
          titles={"Get The Exercise Limited Mobility"}
          icon={<BiHomeAlt />}
          headings={"HOME"}
        />
        <div className="Blogs__container">
          <BlogersLeft />
          <BlogersRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
