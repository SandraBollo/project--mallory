import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

// fijos///////////////////////////
import Nav from './component/nav.js';
import Footer from './component/footer.js';
//////////////componentes/////////////////
import About from './component/about.js';
import Allproducts from './component/all-products.js';
import Category from './component/category.js';
import Home from './component/home.js';
import Products from './component/product.js';
import Terms from './component/terms.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/category/:categoryType" component={Allproducts} />

          <Route exact path="/product/:Products" component={Products} />
          <Route exact path="/all-products" component={Allproducts} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
