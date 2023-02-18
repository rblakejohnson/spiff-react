import React from "react";
import "./style.scss";

// I started out with the <progress> element but discovered that styling in Firefox is limited
const Progress = ({ value = 0, className } ) => (
  <div className={`progress ${className}`}>
    {/* With sass the simplest way to handle the dynamic width is with inline style */}
    {/* With a css in js solution like Styled Components this would be done with props */}
    <div className="progress-value" style={{width: `${value}%`}}/>
  </div>
);

export default Progress;
