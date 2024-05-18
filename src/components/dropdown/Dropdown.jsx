import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./Dropdown.css";
import {
  homes,
  pages,
  Services,
  Projects,
  Blogs,
  Contacts,
} from "../../dummyData";

const Home = ({}) => {
  const [sellected, setSellected] = useState(0);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="dropodown">
      <div className="dropdown__btns">
        <button className="dropdown__button" onClick={handleClick}>
          Homes
        </button>
        <BiChevronDown className="dropdown__icon" />
      </div>
      <div
        className={
          !click ? "dropdown__container toggle " : "dropdown__container"
        }
      >
        {homes.map((home, id) => (
          <ul className="dropodown__list" key={id}>
            <li className="dropdown__lists" onClick={handleClick}>
              {home.item}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

const Tophomes = () => {
  return (
    <div className="toplist">
      <h3> HOMES</h3>
      <div className="toplist__container">
        {homes.map((home, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{home.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
const Toppages = () => {
  return (
    <div className="toplist">
      <h3> PAGES</h3>
      <div className="toplist__container">
        {pages.map((page, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{page.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
const TopServices = () => {
  return (
    <div className="toplist">
      <h3> SERVICES</h3>
      <div className="toplist__container">
        {Services.map((service, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{service.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
const TopBlogs = () => {
  return (
    <div className="toplist">
      <h3> BOGS</h3>
      <div className="toplist__container">
        {Blogs.map((blog, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{blog.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
const TopProjects = () => {
  return (
    <div className="toplist">
      <h3> PROJECTS</h3>
      <div className="toplist__container">
        {Projects.map((project, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{project.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
const TopContacts = () => {
  return (
    <div className="toplist">
      <h3> CONTACT Us</h3>
      <div className="toplist__container">
        {Contacts.map((contact, id) => (
          <ul className="toplist__list" key={id}>
            <li className="toplist__lists">{contact.item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className="dropdown__home">
      {/* <Home /> */}
      <Tophomes />
      <Toppages />
      <TopServices />
      <TopProjects />
      <TopBlogs />
      <TopContacts />
    </div>
  );
};

export default Dropdown;
