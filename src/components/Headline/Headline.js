import React from "react";
import "./Headline.css";

function Headline({ title }) {
  return (
    <div className="headline">
      <h2 className="headline__title">{title}</h2>
    </div>
  );
}

export default Headline;
