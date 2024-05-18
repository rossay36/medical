import { useState } from "react";
import { BsEnvelope, BsSearch, BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcCallback } from "react-icons/fc";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaTimes, FaPaypal } from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { TbCross } from "react-icons/tb";
import cross from "../../assets/cross.jpg";
import "./Navbar.css";
import { Dropdown } from "../../components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__top">
          <div className="nav__top-first">
            <div className="div" />
            <div className="nav__logos">
              <div className="nav__logo">
                <FcCallback className="nav__log" />
              </div>
              <p>+475-5638-7367</p>
            </div>
            <div className="div" />
            <div className="nav__logos">
              <div className="nav__logo">
                <BsEnvelope className="nav__log" />
              </div>
              <p>infor@peacefulthemes.com</p>
            </div>
            <div className="div" />
          </div>

          <div className="nav__top-first">
            <div className="div" />
            <div className="nav__logo">
              <CiFacebook className="nav__log" />
            </div>

            <div className="div" />
            <div className="nav__logo">
              <AiOutlineGooglePlus className="nav__log" />
            </div>
            <div className="div" />
            <div className="nav__logo">
              <CiInstagram className="nav__log" />
            </div>
            <div className="div" />
            <div className="nav__logo">
              <FaPaypal className="nav__log" />
            </div>
            <div className="div" />
          </div>
        </div>

        <div className="nav__bottom">
          <div className="nav__down-logo">
            <img src={cross} />
            <div className="nav__logo-text">
              <h1>MEDICATE</h1>
            </div>
          </div>

          <ul className={toggle ? "nav__list active" : "nav__list"}>
            <Dropdown />

            <BsSearch className="nav__logo-search" />
            <div className="nav__cart">
              <BsCart className="nav__logo-cart" />
              <span>0</span>
            </div>
            <button className="nav__button">
              APPOINTMENT <TbCross />
            </button>
          </ul>
          <button className="hamburger" onClick={handleToggle}>
            {toggle ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
