import React, { Component } from 'react'
import bannerImage from '../../assests/service_banner.jpg'
import ServiceBanner from '../GenericComponents/serviceBanner'
import CmnLayout from '../GenericComponents/joinUs'
import MobileAppSection from '../ProductService/mobile_apps'
import CmngridLayout from '../ProductService/cmngridlayout'
import TechDesc from '../ProductService/techdesc'
import hybrid from '../../assests/android_app.svg'
import android from '../../assests/android.svg'
import ios from '../../assests/hybrid.svg'
import mobile from '../../assests/ios.svg'

const title = 'Are you ready to start building your modern digital business?'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Connect with us'
const servicehead = 'Tech- Automation & AI'
const servicepara = 'We develop robust Artificial Intelligence solutions that not only seamlessly integrate with your business processes but are mindful of encouraging operational efficiency and business growth.'
const servicebtntext = 'Request a proposal' 
const Techtitle = 'Harness Artificial Intelligence to Create Efficient Organizations'
const Techdesc = 'We use machine learning tools and algorithms to help companies develop AI-driven products and solutions. Our team has profound knowledge and experience in designing, implementing and integrating Artificial Intelligence solutions within the customer’s business environment.'


const bannerHead = [
	{
		title: 'Automation & AI'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Chatbots',
		desc: 'Chatbots that leverage Artificial Intelligence and Machine Learning for your business requirements with Integration solutions with ERP/CRM systems'
	},

	{
		image:  mobile,
		title: 'Machine Learning',
		desc: 'Develop systems that interpret complex data, detect trends, and identify similar patterns to assist machines in critical business decisions'
	},

	{
		image:  ios,
		title: 'Natural Language Processing',
		desc: 'Empower machines to interpret and perceive data including business data entries, search related queries, audio sources and web data.'
	},

	{
		image: android,
		title: 'Predictive Modeling',
		desc: 'Anticipate future trends, detect frauds, reduce business risk, optimize your marketing campaigns, or improve operations using predictive analytics.'
	},

	{
		image:  mobile,
		title: 'Computer Vision',
		desc: 'Automate classification and analysis of information with image/pattern recognition, processing and object detection, with greater speed and efficiency.'
	},
]

export default class automation extends Component {
	render() {
		return (
			<>
					<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />

					<MobileAppSection servicehead ={servicehead} servicepara={servicepara} servicebtntext={servicebtntext} />

					<CmngridLayout AppDevelopment = {AppDevelopment} background={true}  headclr= {'#fff'} paraclr={'#fff'} container={true}/>

					<TechDesc Techtitle ={Techtitle} Techdesc={Techdesc} />

					<CmnLayout title={title} para={para} btntxt={btntxt}/>
			</>
		)
	}
}
