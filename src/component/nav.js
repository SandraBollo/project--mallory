import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return(
      <ul>
        <li><Link className="active" to="#">Home</Link></li>
        <li><Link className="active" to="#">About</Link></li>
        <li><Link to="#">Terms+Conditions</Link></li>
        <li><Link to="#">All</Link></li>
        <li><Link to="#">Seating</Link> </li>
        <li><Link to="#">Tables</Link> </li>
        <li><Link to="#">Desks</Link> </li>
        <li><Link to="#">Storag</Link> </li>
        <li><Link to="#">Bedroom</Link> </li>
        <li><Link to="#">Misc</Link> </li>
        <li><Link to="#"><i class="fas fa-cart-plus"></i></Link></li>
      </ul>

    )
  }
}

export default Nav;
