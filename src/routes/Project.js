import React from 'react'


import Navbar from '../components/Navbar';

import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PriceingCart from '../components/PriceingCart';
//import workCard from '../components/workCard';
import workCard  from '../components/workCard';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent work"/>
      
      <workCard/>
      <PriceingCart/>
      
      <Footer/>
    </div>
  )
}

export default Project
