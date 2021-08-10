import React, { Component } from 'react'
import '../../layout/font-family/libra_franklin.css'
import MobileAppSection from './mobile_apps'
import DevlopProcess from './producDev'
import CmnLayout from '../GenericComponents/joinUs'
import './service.css'
import ServiceBanner from '../GenericComponents/serviceBanner'
import bannerImage from '../../assests/service_banner.jpg'
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import CmngridLayout from '../ProductService/cmngridlayout'
import GridAppDev from './gridappdev'
import TechDesc from './techdesc'
import hybrid from '../../assests/android_app.svg'
import android from '../../assests/android.svg'
import ios from '../../assests/hybrid.svg'
import mobile from '../../assests/ios.svg'




const title = 'Are you ready to start building your modern digital business?'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Connect with us'
const Techtitle = 'Technology stack we base our apps on!'
const Techdesc = 'Our strategic thinkers and tech geeks are proficient at working around the different Technology Stack, Design Methodology, UI/UX, and users expectations every device comes with.'
const servicehead = 'Mobile apps development'
const servicepara = 'We build powerful, scalable, interactive and high quality app solutions to boost your mobile existence and impact on your smart growth.'
const servicebtntext = 'Request a proposal' 

const bannerHead = [
	{
		title: 'Services'
	},

	{
		title: 'Engineering'
	},

	{
		title: 'Mobile apps development'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Mobile App Consultancy',
		desc: 'Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy'
	},

	{
		image:  mobile,
		title: 'Android App Development',
		desc: 'Extensive experience in native Android development ensures that we create high quality apps to increase your customer base by millions.'
	},

	{
		image:  ios,
		title: 'iOS App Development',
		desc: 'We create end-to-end tailor-made iOS solutions using latest SDKs and with a seamless native user interface design for enterprises belonging to all domains.'
	},

	{
		image: android,
		title: 'Hybrid App Development',
		desc: 'We build cross-platform apps with tried and tested technologies that give the ability to leverage reusable code and go market faster on multiple platforms more economically.'
	}
]




export default class service extends Component {

	componentDidMount() {
		 document.title = this.props.title;
	}


    render() {
			
			return (
				<>
					<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />

					<MobileAppSection servicehead ={servicehead} servicepara={servicepara} servicebtntext={servicebtntext} />

					<CmngridLayout AppDevelopment = {AppDevelopment} background={true}  headclr= {'#fff'} paraclr={'#fff'} container={true}/>

					<GridAppDev/>
					
					<TechDesc Techtitle ={Techtitle} Techdesc={Techdesc} />

					<DevlopProcess/>
				
					<CmnLayout title={title} para={para} btntxt={btntxt}/>
				</>
			)
    }
}
