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
  let allproductsInRoute = componentProps.match.params.categoryType
  // let SeatingProductsInRoute = componentprops.match.params.

  if(typeof allproductsInRoute !== 'undefined'){
    const genderObjMap ={
      Seating : "seating",
      Tables : "tables",
      Desks : "desks",
      Storag : "storag",
      Bedroom : "bedroom",
      Misc :"miscellaneous"


    }
    lisApi = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${genderObjMap[allproductsInRoute]}`

  }



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
  this._ferchfurnitureData(this.props)
}
componentWillReceiveProps(newProps){
  this._ferchfurnitureData(newProps)
}

_renderFillcards( lisData){
  let fiLis = this.state.furnitureDataList.filter(function(objN){
    if(objN.category === "seating"){
      return true
    }else   if(objN.category === "tables"){
        return true

    }else if(objN.category === "desks"){
        return true


    }else if (objN.category === "storag") {
      return true

    }else if(objN.category ==="bedroom"){
      return true
    }else if(objN.category === "miscellaneous"){
      return true

    }else {
      return false
    }
  })

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
          <h2 className="tituloAll">Featured Poducts</h2>
    		<h3 className="colorGris subAll">Check out some of our favorite listings</h3>
      <div className="item">
    		<button className="btn-red colorRed">All items</button>
    		<button className="btn-gris colorGris">on Sale</button>
    		<p className="align"><span className="yellow"><strong>61</strong></span> <span className="colorGris">items showing</span></p>
      </div>

          <div className="row">

              {this._renderCards(this.state.furnitureDataList)}
          </div>
      </div>
      </section>
    );
  }
}

export default Allproducts;
