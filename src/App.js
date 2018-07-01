import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './component/about.js';
import Allproducts from './component/all-products.js';
import Category from './component/category.js';
import Footer from './component/footer.js';
import Home from './component/home.js';
import Nav from './component/nav.js';
import Products from './component/product.js';
import Terms from './component/terms.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/all-products" component={Allproducts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
