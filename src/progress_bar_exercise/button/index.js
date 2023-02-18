import React from "react";
import "./style.scss";

const Button = ({ type = "button", color = "green", children, ...props }) => (
  <button type={type} className={`button ${color}`} {...props}>
    {children}
  </button>
);

export default Button;
