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
const servicehead = 'Tech- Data Science'
const servicepara = 'Leverage deep learning technologies to extract value from huge volumes of data and unlock hidden opportunities and insights.'
const servicebtntext = 'Request a proposal' 
const Techtitle = 'Turning Big Data into Big Insights'
const Techdesc = 'We turn technology into business outcomes by delivering information management, business intelligence and analytic solutions under one umbrella.'


const bannerHead = [
	{
		title: 'Data Science'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Data Development',
		desc: 'Real-time data ingestion, batch processing and storage from myriad data sources.'
	},

	{
		image:  mobile,
		title: 'Data Warehouse Analytics',
		desc: 'Descriptive, Predictive and Prescriptive Analytics, & Historical Data Analysis.'
	},

	{
		image:  ios,
		title: 'Data Visualization',
		desc: 'Complete Data Visualization for better insights and generate high impact.'
	},

	{
		image: android,
		title: 'Real-Time Analytics',
		desc: 'Derive actionable insights from your data in real-time to seize new opportunities.'
	},

	{
		image:  mobile,
		title: 'Enterprise Data Management',
		desc: 'Improve operational efficiency and reduce reporting mistakes.'
	},
	{
		image:  android,
		title: 'Next-Gen Analytics',
		desc: 'Use next-gen analytics to power a data-driven organization.'
	},

	{
		image:  android,
		title: 'Data Forecasting',
		desc: 'Turn insights into patterns using Predictive and Mathematical Modeling.'
	},

	{
		image:  android,
		title: ' Tailored Analytics',
		desc: 'Develop custom algorithms appropriate to address business challenges.'
	},
	{
		image:  android,
		title: 'Cloud Analytics',
		desc: 'IaaS, SaaS, PaaS solutions as per client requirements on Data Analytics.'
	}
]

export default class datascience extends Component {
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
