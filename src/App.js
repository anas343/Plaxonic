import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './Component/HomeComponent/home';
import Footer from './layout/Footer';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './Component/AboutComponent/about'
import ProductService from './Component/ProductService/service'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <ProductService />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
