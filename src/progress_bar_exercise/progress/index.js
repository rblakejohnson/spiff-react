import React from "react";
import "./style.scss";

// I started out with the <progress> element but discovered that styling in Firefox is limited
const Progress = ({ children, ...props }) => (
  <div className="progress" {...props}>
    <div className="progress-value" style={{width: "70%"}}/>
  </div>
);

export default Progress;
