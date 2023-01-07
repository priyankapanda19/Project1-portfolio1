import  "./HeroImgStyles.css";

import React from 'react'
import introImg from "../assets/img7.jpg"
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
      <div classNAme="mask">

<img className="into-img" src={ introImg } alt="introImg"/></div>

<div className="content">
    <p>Hi,I'M a  Trainee</p>
    <h1>React Developer</h1>
    <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>

    </div>
</div>

    </div>
  )
}

export default HeroImg
