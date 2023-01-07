import "./footerStyle.css"

import React from 'react'
import {FaFacebook, FaGit, FaHome, FaLinkedin, FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div clasName="footer">
    <div clasName ="footer-container"></div>
      <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
       <div>
        <p>53 shitala mandir road</p>
        <p>Kolkata</p>
       </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        6289331314</h4>
        
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        julypriyanka59@gmail.com</h4>
        
        </div>
      </div>
      <div className="right">
        <h4>About Me</h4>
        <p>I am Priyanka Panda</p>
        <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaGit size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
