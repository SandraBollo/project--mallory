import React, { Component } from 'react'
import Headers from './header.js'

class Home extends Component{
 render() {
   console.log(this.props.match)
    return(
      <div>
        <Headers match={this.props.match} />
        <div>
          <h2>Featured Poducts</h2>
          <h3>Check out some of our favorite listings</h3>
        </div>
      </div>


    )
  }
}
export default Home;
