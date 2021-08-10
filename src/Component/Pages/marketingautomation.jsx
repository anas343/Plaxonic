import React, { Component } from 'react'
import bannerImage from '../../assests/service_banner.jpg'
import ServiceBanner from '../GenericComponents/serviceBanner'
import MobileAppSection from '../ProductService/mobile_apps'
import CmngridLayout from '../ProductService/cmngridlayout'
import hybrid from '../../assests/android_app.svg'
import android from '../../assests/android.svg'
import ios from '../../assests/hybrid.svg'
import mobile from '../../assests/ios.svg'

const title = 'Are you ready to start building your modern digital business?'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Connect with us'
const servicehead = 'Digital Marketing Automation'
const servicepara = 'We enable organizations to automate & measure the various marketing tasks and workflows to increase efficiency, marketing ROI and grow revenues.'
const servicebtntext = 'Request a proposal' 


const bannerHead = [
	{
		title: 'Marketing Automation'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Technical Advisory',
		desc: 'Our technical expertise in web technologies coupled with Digital Automation expertise help establish the marketing automation platform with optimum benefits.'
	},

	{
		image:  mobile,
		title: 'CRM Integration',
		desc: 'Seamlessly integrate your CRM with the customized Marketing Automation tools to empower the complete ecosystem.'
	},

	{
		image:  ios,
		title: 'Analytics',
		desc: 'We collect, measure, analyze, & report online data to understand user behavior & optimize the solutions.'
	},

	{
		image: android,
		title: 'Measure, Track and Integrate',
		desc: 'Establish goals, define key metrics, and track behavior, enabling organizations to continuously evaluate and integrates other tools through an open API.'
	},

	{
		image:  mobile,
		title: 'Email Marketing Automation',
		desc: 'Use of analytics and actionable reports for email campaigns to enhance open rate, delivery rate, click-through rate, bounce rate, and unsubscribe rate.'
	},
]

export default class marketingautomation extends Component {
	render() {
		return (
			<>
				<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />
				
				<MobileAppSection servicehead ={servicehead} servicepara={servicepara} servicebtntext={servicebtntext} />

				<CmngridLayout AppDevelopment = {AppDevelopment} background={true}  headclr= {'#fff'} paraclr={'#fff'} container={true}/>
			</>
		)
	}
}
