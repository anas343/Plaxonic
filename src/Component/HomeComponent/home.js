import '../HomeComponent/home.css';
import '../../layout/font-family/libra_franklin.css';
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import BannerSlider from '../HomeComponent/bannerslider'
import Services from '../HomeComponent/services'
import Product from '../HomeComponent/product'
import CaseStudy from '../HomeComponent/casestudyslider'
import Career from '../HomeComponent/career'
import CmnLayout from '../../layout/common_component'


	import React, { Component } from 'react'
	
	export default class home extends Component {
		render() {
			
			return (
				<div className="hm-hero-section">
					{/* <Slider Component> */}
				   	<BannerSlider/>
					{/* <Slider Component End> */}

					{/* <Service Component> */}
					  <Services/>
					{/* <Service Component End> */}

					{/* <Product Component> */}
					  <Product/>
					{/* <Product Component End> */}

					{/* {Case Study Component} */}
						<CaseStudy/>
					{/* {Case Study End} */}

					{/* Career Component */}
						<Career/>
					{/* Career Component End */}

					{/* Common Component */}
						<CmnLayout/>
					{/* Common Component end */}

				</div>
			)
		}
	}
	