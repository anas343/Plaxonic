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
import GetInTouch from './Component/ContactComponent/getInTouch'
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import OverView from './Component/Pages/overview'
import ManagedService from './Component/Pages/managedservice';
import MigrationService from './Component/Pages/migrationservice';
import MarketingAutomation from './Component/Pages/marketingautomation';
import Automation from './Component/Pages/automation';
import DataScience from './Component/Pages/datascience';
import CloudService from './Component/Pages/cloudservice';





function App() {
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
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
        <Route exact path="/getInTouch">
          <GetInTouch title= 'Get In Touch' />
        </Route>
        <Route exact path="/overview">
          <OverView title= 'Overview'/>
        </Route>
        <Route exact path="/managedservice">
          <ManagedService title='Managed Services'/>
        </Route>
        <Route exact path="/migrationservice">
          <MigrationService title='Migration Service'/>
        </Route>
        <Route exact path="/marketingautomation">
          <MarketingAutomation title='Marketing Automation'/>
        </Route>
        <Route exact path="/automation">
          <Automation title='Automation'/>
        </Route>
        <Route exact path="/datascience">
          <DataScience title='DataScience'/>
        </Route> 
        <Route exact path="/cloudservice">
          <CloudService title='CloudService'/>
        </Route> 
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

