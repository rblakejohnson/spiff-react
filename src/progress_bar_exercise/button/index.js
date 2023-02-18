import React from "react";
import "./style.scss";

const Button = ({ type = "button", children, ...props }) => (
  <button type={type} className="button" {...props}>
    {children}
  </button>
);

export default Button;
