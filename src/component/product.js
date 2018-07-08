import React, { Component } from 'react'
import Allproducts from './all-products.js'

class Products extends Component {
  render() {
    return(
      <div className="producto">
        <img className="imgProducto"src={this.props.imgUrl}/>
        <h4>{this.props.name}</h4>
        <h6>{this.props.price}</h6>
			</div>
    )
  }
}
export default Products;
