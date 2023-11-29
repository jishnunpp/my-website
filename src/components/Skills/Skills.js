import React from "react";
import "./Skills.css";
import aboutimg from "../../assets/images/about1.jpg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-image">
        <img src={aboutimg} alt="mypic1" />
      </div>
      <div className="skills-text">
        <div>
          <h4>MY SKILLS</h4>

          <h1  className="gradient__text">My Featured Skills</h1>
          <p>
            I Specialize in Branding and Strategy, and am passionate about
            creating Awesome Portfolio work. And I always ready to impress the
            audience with my Creativity.
          </p>
        </div>
        <div className="skills-bar-section">
        <div>
            <h2>Web Development</h2>
            <div className="skills-bar">
              <div className="skills-bar-first">
                
              </div>
            </div>
          </div>
          <div>
            <h2>Ideas & Technology</h2>
            <div className="skills-bar">
              <div className="skills-bar-second">
                
              </div>
            </div>
          </div>
          <div>
            <h2>Responsive Web Design</h2>
            <div className="skills-bar">
              <div className="skills-bar-third">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
