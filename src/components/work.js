import "./workCardStyle.css"
//import pro1 from "../assets/img2.jpg"
import React from 'react'

import workCard from "./workCard" 

import workcardData from "./workCardData"

const work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projectes</h1>
            <div className="project-container">
              {workcardData.map((val,ind)=>{
              return(

                <workCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}>
                    </workCard>

                    
              )
              })}  
            </div>
        </div>
    )
}

export default work
