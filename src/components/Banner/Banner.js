import React from 'react'
import './Banner.css'
import mypic from './../../assets/images/pic.jpg'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='banner'>
       
        <div  className='banner-text'>
            <div className='banner_text-section'>
                <h2>Hi,I'm Jishnu Np</h2>
                <h1  className="gradient__text">Web Developer</h1>
                <p>I love Graphic design and Photography and have been <br/>working on my portfolio since 2022
                    . I Can give your business <br/> a new Creative start right away!</p>

            </div>
            <div className='banner_button-section'>
            <Link to={'contact'}><button className='banner_button1'>Hire me</button></Link> 
            <button className='banner_button2'>My portfolio</button>

            </div>

        </div>
        <div  className='banner-image'>
            <img src={mypic} alt='mypic'/>

        </div>
      
    </div>
  )
}

export default Banner
