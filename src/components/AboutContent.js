import "./AboutContentStyle.css"
import React from 'react'
import {Link} from "react-router-dom"
import img7 from "../assets/img7.jpg"
import img6 from "../assets/img6.jpg"
const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who am i?????????</h1>
        <p>Im a fullstake developer</p>
        <Link to="/contact">
          <button className="btn">Contact</button>  
        </Link>
    </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack-top">
                <img src={img7} className="img" alt="true"/>
            </div>
            <div className="img-stack-bottom">
                <img src={img6} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
