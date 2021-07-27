import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './Component/HomeComponent/home';
import Footer from './layout/Footer';
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './Component/AboutComponent/about'
import ProductService from './Component/ProductService/service'



function App() {

  AOS.init({
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
  });
  
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About  title='About'/>
        </Route>
        <Route exact path="/service">
          <ProductService title= 'Service' />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
