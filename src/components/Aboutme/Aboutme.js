import React from 'react';
import './Aboutme.css';
import mypic from './../../assets/images/pic.jpg'

const Aboutme = () => {
  return (
    <div className="aboutme">
    <div className="aboutme-image">
      <img src={mypic} alt="mypic1" />
    </div>
    <div className="aboutme-text">
      <div>
        <h4>ABOUT ME</h4>

        <h1  className="gradient__text">A Few Words About Me</h1>
        <p>
        I  have been working on my portfolio since 2022. 
        I Can give your business a new Creative start right away! Contact me and we will discuss your projects!
        </p>
        <h2>Having 1 Years of Experience. I Would Love to make your Ideas real. I Can give your business a new Creative start right away!</h2>
      </div>
      <div className="aboutme-bar-section">
      <div>
          <h2> Web Design</h2>
          <div className="aboutme-bar">
            <div className="aboutme-bar-third">
              
            </div>
          </div>
        </div>
      <div>
          <h2>Web Development</h2>
          <div className="aboutme-bar">
            <div className="aboutme-bar-first">
              
            </div>
          </div>
        </div>
        <div>
          <h2>Ideas & Technology</h2>
          <div className="aboutme-bar">
            <div className="aboutme-bar-second">
              
            </div>
          </div>
        </div>
        <div>
          <h2>Responsive Web Design</h2>
          <div className="aboutme-bar">
            <div className="aboutme-bar-third">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Aboutme
