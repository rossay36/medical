import React from "react";
import "./MainServices.css";
import { HeadTitle } from "../../components";
import drawing1 from "../../assets/drawing1.png";
import drawing3 from "../../assets/drawing3.png";
import drawing2 from "../../assets/drawing2.jpg";

const MainServices = () => {
  return (
    <div className="MainServices">
      <HeadTitle header="OUR SERVICES" title="Explore Our Main Service" />
      <div className="MainServices__box">
        <div className="MainServices__rows">
          <div className="MainServices__col">
            <img src={drawing2} />
            <h1>Endocrinology</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
          <div className="MainServices__col">
            <img src={drawing3} />
            <h1>Cardiology</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
          <div className="MainServices__col">
            <img src={drawing1} />
            <h1>Angioplasty</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
        </div>

        <div className="MainServices__rows">
          <div className="MainServices__col">
            <img src={drawing3} />
            <h1>Eye Care</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
          <div className="MainServices__col">
            <img src={drawing1} />
            <h1>Neurology</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
          <div className="MainServices__col">
            <img src={drawing2} />
            <h1>Orthopaedics</h1>
            <p>
              Endocrinology There are many variations of pas of Lorem Ipsum
              availab.There are many variations of pas of Lorem Ipsum availab.
            </p>
            <button className="button">READ MORE +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
