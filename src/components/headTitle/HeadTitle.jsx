import React from "react";
import "./HeadTitle.css";

const HeadTitle = ({ header, title }) => {
  return (
    <div className="HeadTitle">
      <h3>{header}</h3>
      <h1>{title}</h1>
    </div>
  );
};

export default HeadTitle;
