import React from 'react'
import './Footer.css'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-heading'>
            <div>
            <h2>jishnu Np</h2>

            </div>
            <div  className='footer-list'>
                <ul>
                    <li><span>< FaPhoneFlip/></span><a >+91 9539848397</a></li>
                    <li><span  >< MdEmail /></span><a href="jishnunp397@gmail.com.com">jishnunp397@gmail.com</a></li>
                    <li><span><FaLocationDot/></span><a>malappuram kerala, INDIA - 679338.</a></li>
                </ul>
            </div>

        </div>
        <div className='footer-bottom'>
        
            <div className='footer-social-media'>
                <ul>
                    <li><a>< IoLogoWhatsapp/></a></li>
                    <li><a href="https://www.instagram.com/__jishnu_np/"><FaInstagramSquare /></a></li>
                    <li><a href='https://www.linkedin.com/in/jishnu-np-165339260/'>< FaLinkedin /></a></li>
                    <li><a><FaTwitterSquare/></a></li>
                </ul>
            </div>


        </div>
     
    </div>
  )
}

export default Footer
