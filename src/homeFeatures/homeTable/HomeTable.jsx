import "./HomeTable.css";
import { FcCallback } from "react-icons/fc";
import { TbCross } from "react-icons/tb";

import drawing1 from "../../assets/drawing1.png";

const HomeTable = () => {
  return (
    <div className="homeTable">
      <div className="homeTable__box">
        <div className="homeTable__img">
          <img src={drawing1} />
          <img src={drawing1} />
        </div>
        <div className="homeTable__text">
          <h2 id="Emergency">Emergency Cases</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo
          </p>
        </div>
        <div className="homeTable__call">
          <FcCallback className="homeTable__icon" />
          <p>+456-467-5874</p>
        </div>
      </div>

      <div className="homeTable__box homeTable__boxs">
        <div className="homeTable__img">
          <img src={drawing1} />
          <img src={drawing1} />
        </div>
        <div className="homeTable__text">
          <h2 id="doctors_table">Doctors TimeTable</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dignissim massa vitae laoreet fermentum. Integer lacinia arcu et
            justo
          </p>
        </div>
        <button className="button">
          TIMETABLE
          <TbCross />
        </button>
      </div>

      <div className="homeTable__box">
        <div className="homeTable__img">
          <img src={drawing1} />
          <img src={drawing1} />
        </div>
        <div className="homeTable__tables">
          <h2>Opening Hours</h2>
          <div className="homeTable__times">
            <p>Monday - Friday</p>
            <p>8:00 - 7:00 PM</p>
          </div>
          <hr />
          <div className="homeTable__times">
            <p>Saturday</p>
            <p>6:00 - 5:00 PM</p>
          </div>
          <hr />
          <div className="homeTable__times">
            <p>Sunday</p>
            <p>9:00 - 4:00 PM</p>
          </div>
          <hr />
          <div className="homeTable__times">
            <p>Sunday</p>
            <p>24HRS 7DAYs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
