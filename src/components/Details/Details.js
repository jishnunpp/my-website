import React from "react";
import "./Details.css";
import mypic1 from "./../../assets/images/pic1.webp";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="details">
      <div className="details-image">
        <img src={mypic1} alt="mypic1" />
      </div>
      <div className="details-text">
        <div>
          <h4>MY BIOGRAPHY</h4>

          <h1  className="gradient__text">A Lead Web Designer & Web Developer Based In INDIA</h1>
          <p>
            I love Graphic design and Photography and have been working on my
            portfolio since 2022. I Can give your business a new Creative start
            right away! Contact me and we will discuss your projects!
          </p>
        </div>
        <div className="details-data">
          <div className="details-heaing">
            <span>Name:</span>
            <p>Jishnu Np</p>
          </div>
          <div className="details-heaing">
            <span>From:</span>
            <p>kerala, INDIA</p>
          </div>

          <div className="details-heaing">
            <span>Email:</span>
            <p>jishnunp397@mail.com</p>
          </div>
          <div className="details-heaing">
            <span>Phone:</span>
            <p>9539848397</p>
          </div>
        </div>
        <div className="details-socialmedia">
            <p>Follow me on</p>
            <ul>
            <li><a href="https://www.instagram.com/__jishnu_np/"><FaInstagramSquare /></a></li>
                    <li><a href='https://www.linkedin.com/in/jishnu-np-165339260/'>< FaLinkedin /></a></li>
                    <li><a><FaTwitterSquare/></a></li>
            </ul>

        </div>
        <div className='details_button-section'>
        <Link to={'contact'}>  <button className='details_button1'>Hire me</button></Link>
        <Link to={'About'}>   <button className='details_button2'>My portfolio</button></Link>

            </div>
      </div>
    </div>
  );
};

export default Details;
