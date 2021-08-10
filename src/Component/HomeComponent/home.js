import '../HomeComponent/home.css';
import '../../layout/font-family/libra_franklin.css';
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import BannerSlider from '../HomeComponent/bannerslider'
import Services from '../HomeComponent/services'
import Product from '../HomeComponent/product'
import CaseStudy from '../HomeComponent/casestudyslider'
import Career from '../HomeComponent/career'
import CmnLayout from '../GenericComponents/joinUs'
import React, { Component } from 'react'
import CounterJS from '../HomeComponent/numbercounter'


	

const title = 'Are you ready to start building your modern digital business?'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Connect with us'



	export default class home extends Component {

		componentDidMount() {
			document.title= 'Plaxonic'
		}

		render() {
			
			return (
				<div className="hm-hero-section">
	
				  <BannerSlider/>
				
					<Services/>

					<CounterJS background={true} content={true} headclr={'#fff'} paraclr={'#fff'}/>

					<Product/>
				
					<CaseStudy/>
				
					<Career/>
				
					<CmnLayout title={title} para={para} btntxt={btntxt}/>
				</div>
			)
		}
	}
	