import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from  '../images/mf-logo-white.svg'

class Nav extends Component {
  render() {
    return(
      <ul>
        <li><Link to="/" className="active icon-menu2" ><img src={ ImgLogo }/></Link></li>
        <li><Link className="active" to="/about">About</Link></li>
        <li><Link to="/terms">Terms+Conditions</Link></li>
          <li ><Link to="null">|</Link></li>
          <li><Link to="/category/Allproducts">All</Link></li>
          <li className="colorBlue"><Link to="/category/Seating">Seating</Link> </li>
          <li className="colorBlue"><Link to="/category/Tables">Tables</Link> </li>
          <li className="colorBlue"><Link to="/category/Desks">Desks</Link> </li>
          <li className="colorBlue"><Link to="/category/Storag">Storag</Link> </li>
          <li className="colorBlue"><Link to="/category/Bedroom">Bedroom</Link> </li>
          <li className="colorBlue"><Link to="/category/Misc">Misc</Link> </li>
          <li ><Link to="null">|</Link></li>
        <li className="amarillo"><Link to="#"><i className="fas fa-cart-plus"></i></Link></li>
      </ul>

    )
  }
}

export default Nav;
