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
const servicehead = 'Managed Services'
const servicepara = 'We automate IT infrastructure on the cloud, either public or private or hybrid, manage its scale while ensuring high environment velocity, and thus, make end-to-end continuous delivery pipeline efficient and seamless.'
const servicebtntext = 'Request a proposal' 
const Techtitle = 'Managed Services Solutions'
const Techdesc = 'We enable high infrastructure performance and availability so you can innovate for customers faster and grow more efficiently at driving business results.'


const bannerHead = [
	{
		title: 'Managed Services'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Infrastructure as Code',
		desc: 'Manage application servers, infrastructure & applications as code, based on organization-specific environment needs and coupling them with automation tasks libraries'
	},

	{
		image:  mobile,
		title: 'Automate Infrastructure Deployment',
		desc: 'Create deployments manageable, reproducible, and error-proof by tools specific to your application, deployed environments, and further automating the deployment workflow.'
	},

	{
		image:  ios,
		title: 'Customized Tools',
		desc: 'Scripts to execute several tasks such as OS Configuration on a virtual or physical node to firewall ports establishment, to ensure high cloud performance and availability'
	},

	{
		image: android,
		title: 'Preventive Maintenance		',
		desc: 'Comprehensive Server Health Monitoring, Regular Operational Metrics, Proactive Measures based on Monitoring Trends and Improvement Plans.'
	},

	{
		image:  mobile,
		title: 'Continuous Reporting',
		desc: 'Risk reports and remediation plans, Forecast and trends reporting, Spending Optimization, Disaster Recovery Test Reports.'
	},
]

export default class managedservice extends Component {
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
