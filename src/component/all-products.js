import React, { Component } from 'react'
import request from 'superagent'
import Products from './product.js'

class Allproducts extends Component {
  constructor(args){
    super(args)
    this.state ={
      furnitureDataList : []
    }
  }

_ferchfurnitureData(componentProps){
  let lisApi = 'https://mallory-furniture-admin.now.sh/api/v1/products'
  // let allproductsInRoute =componentprops.match.params.
  // let SeatingProductsInRoute = componentprops.match.params.



request
 .get(lisApi)
 .then((serverRes)=>{
   const serverResJson =serverRes.body
   console.log(serverResJson)
   this.setState({
     furnitureDataList : serverResJson
   })
 })


}
componentWillMount(){
  this._ferchfurnitureData(this.pros)
}
componentWillReceiveProps(newProps){
  this._ferchfurnitureData(newProps)
}
  _renderCards(Allproducts){
    let userComponentList = Allproducts.map((cardObj, i)=>{
      return(
        <Products
        imgUrl={cardObj.imageLink}
         name={cardObj.item}
         price={cardObj.price}
         key={i}
        />
      )
    })
    return userComponentList

  }



  render() {
    return (
      <section>
      <div className="content">
      <h2>All Products</h2>
        <h4>All available listings</h4>
        <h3>-l-</h3>
          <div className="hola">
              // <Products/>
              {this._renderCards(this.state.furnitureDataList)}
          </div>
      </div>
      </section>
    );
  }
}

export default Allproducts;
