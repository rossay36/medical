import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import "./Toggling.css";

const TogglingFirst = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p>where can i go and provid a simple tests? </p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo. tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};
const TogglingSecond = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p>What happen to my sample once i provid it? </p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};
const TogglingThird = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p>What will laboratory test cost me?</p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo. tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};
const TogglingFouth = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p>Using innovative technology? </p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};
const TogglingFift = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p>What is our goals?</p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo. tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo. adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};
const TogglingSix = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggling">
      <button className="Toggling__button" onClick={handleToggle}>
        <p> are the doctors here qualify? </p>
        {toggle ? (
          <BsChevronUp className="Toggling__icons" />
        ) : (
          <BsChevronDown className="Toggling__icons" />
        )}
      </button>

      <div
        className={
          !toggle ? "Toggling__container actives " : "Toggling__container"
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo. tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo. tellus, luctus nec ullamcorper mattis, pulvinar dapibus
          leo. tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};

const Toggling = () => {
  return (
    <div className="Toggling__components">
      <TogglingFirst />
      <TogglingSecond />
      <TogglingThird />
      <TogglingFouth />
      <TogglingFift />
      <TogglingSix />
    </div>
  );
};

export default Toggling;
