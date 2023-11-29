import React from "react";
import "./Service.css";
import web from "../../assets/icons/icons8-laptop-100.png";
import responsive from "../../assets/icons/icons8-responsive-100.png";
import camera from "../../assets/icons/icons8-camera-100.png";

const Service = () => {
  return (
    <div className="service">
      <div className="service-heading">
        <h2  className="gradient__text">What I Do dor you</h2>
      </div>
      <div className="service-card-section">
        <div className="service-card">
          <div className="service-card-heading">
            <img src={web} alt="web" />
            
          </div>
          <div className="service-card-text">
          <h2>Web Development</h2>
            <p>
              
              Web development is the work involved in developing a website for
              the Internet (World Wide Web) or an intranet (a private network).
              .
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-heading">
            <img src={responsive} alt="web" />
            
          </div>
         
          <div className="service-card-text">
          <h2>responsive Design</h2>
            <p>
              Web design is important because it impacts how your audience
              perceives your brand. A good web design helps you keep your leads
              on your page..
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-heading">
            <img src={camera} alt="web" />
            
          </div>
          <div className="service-card-text">
          <h2>Photography</h2>
            <p>
              Photography to me is catching a moment which is passing and which
              is true.The art of photography is all about directing the
              attention of viewer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
