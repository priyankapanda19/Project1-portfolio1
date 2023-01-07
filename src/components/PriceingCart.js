import "./PriceingCartsStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
const PriceingCart = () => {
  return  <div className="Pricing">
    <div className= "card-container">
     <div className= "card">
      <h3>--Basic--</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>--3 days --</p>
      <p>--features</p>
      <p>----------</p>
      <Link to="/contact" className="btn">Purches Now</Link>
    </div>
    <div className= "card">
      <h3>--Basic--</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>--3 days --</p>
      <p>--features</p>
      <p>----------</p>
      <Link to="/contact" className="btn">Pruches Now</Link>
    </div>
    <div className= "card">
      <h3>--Basic--</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>--3 days --</p>
      <p>--features</p>
      <p>----------</p>
      <Link to="/contact" className="btn">Purches Now</Link>
    </div>
    </div>

    </div>
  
}

export default PriceingCart
