import React from "react";
import "./Footer.css";
import { BsEnvelope } from "react-icons/bs";
import cross from "../../assets/cross.jpg";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaGooglePlusG, FaGreaterThan, FaCalendarAlt } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import doct1 from "../../assets/doct1.jpg";
import doctorpatient from "../../assets/doctorpatient.jpg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__top">
        <div className="Footer__env">
          <BsEnvelope className="Footer__env-icon" />
          <div className="Footer__env-text">
            <h2>Latest Updates Subscribe</h2>
            <h2>To Our Newsletter</h2>
          </div>
        </div>
        <div className="Footer__form">
          <input
            className="Footer__input"
            type="email"
            placeholder="Enter Your Email"
          />
          <input className="Footer__input1" type="submit" value="SUBMIT" />
        </div>
      </div>
      <div className="Footer__down">
        <div className="Footer__row1">
          <div className="Footer__img">
            <img src={cross} />
            <h1>MEDICATE</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo vulputate egestas
          </p>
          <div className="Footer__icons">
            <FiFacebook className="Footer__icons-icon" />
            <CiTwitter className="Footer__icons-icon" />
            <FaGooglePlusG className="Footer__icons-icon" />
            <FiInstagram className="Footer__icons-icon" />
          </div>
        </div>
        <div className="Footer__row-col1">
          <h1>Our Courses</h1>
          <div className="Footer__row2">
            <div className="Footer__boxs">
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>About Us</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Our Services</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Doctor1</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Doctos2</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Event</p>
              </div>
            </div>

            <div className="Footer__boxs">
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Contact Us</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Our Process</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>FAQ</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Department</p>
              </div>
              <div className="Footer__box-icon">
                <FaGreaterThan />
                <p>Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__row-col2">
          <h1>Recent Posts</h1>
          <div className="Footer__row3">
            <div className="Footer__post-imgs">
              <div className="Footer__post_img">
                <img src={doct1} />
              </div>
              <div className="Footer__post-text">
                <FaCalendarAlt className="Footer__post-icon" />
                <h4>GET BTHE EXCERCIS LIMITED MOBILITY</h4>
              </div>
            </div>

            <div className="Footer__post-imgs">
              <div className="Footer__post_img">
                <img src={doctorpatient} />
              </div>
              <div className="Footer__post-text">
                <FaCalendarAlt className="Footer__post-icon" />
                <h4>GET BTHE EXCERCIS LIMITED MOBILITY</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__row4">
          <div className="Footer__contact">
            <h1>Contact Us</h1>
          </div>
          <div className="Footer__contact-ros">
            <BsFillTelephoneFill />
            <h2>+5678-7654-876</h2>
          </div>
          <div className="Footer__contact-ros">
            <BsFillTelephoneFill />
            <p>@infopeacefultheme.com</p>
          </div>
          <div className="Footer__contact-ros">
            <BsFillTelephoneFill className="Footer__post-icon" />
            <p>ObiRoss, weedy Evanto, HQ 42 Fifth st, Los Angeles, USA</p>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>Copyright 2023 medicate All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
