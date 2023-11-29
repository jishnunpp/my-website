import React from "react";
import './Hireme.css'
import { Link } from "react-router-dom";

const Hireme = () => {
  return (
    <div className="hireme">
      <div className="hireme-text">
        <p>GET IN TOUCH</p>
        <h2>Let's Start A Project! Hire Me.</h2>
      </div>
      <div className="hireme-button">
      <Link to={'/contact'}> <button className="hireme_button1">Hire me</button></ Link >
      <Link to={'/contact'}>  <button className="hireme_button2">Contact Me</button></ Link >
      </div>
    </div>
  );
};

export default Hireme;
