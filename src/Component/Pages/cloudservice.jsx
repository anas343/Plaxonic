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
import DevlopSerProcess from '../Pages/devlopprocess';
import DevSerImage from '../../assests/dv1.svg'
import DevSerImage2 from '../../assests/dv2.svg'
import DevSerImage3 from '../../assests/dv3.svg'
import DevSerImage4 from '../../assests/dv4.svg'
import DevSerImage5 from '../../assests/dv5.svg'

const title = 'Are you ready to start building your modern digital business?'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Connect with us'
const servicehead = 'Cloud Service'
const servicepara = 'Customers today are seeking customized and individualized experiences across the touchpoints and most businesses struggle to do it right. We provide organizations expert guidance, implementation support and managed services to help you simplify and accelerate your journey to cloud services'
const servicebtntext = 'Request a proposal' 
const Techtitle = 'Turning Big Data into Big Insights'
const Techdesc = 'We turn technology into business outcomes by delivering information management, business intelligence and analytic solutions under one umbrella.'


const devHead = 'Always Think Scale'
const devPara = 'Take advantage of the flexibility, agility, and velocity of the cloud to stay competitive and ahead of the competition while managing increased IT complexity.'


const bannerHead = [
	{
		title: 'Cloud Services'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Scalable',
		desc: 'We always design the system to ensure that the backend is highly available for scale. Our pure functional micro-service architecture will enable horizontal scaling.'
	},

	{
		image:  mobile,
		title: 'Containerized for deployment',
		desc: 'Our services are designed to ensure that they are always ready for deployment and scale up.'
	},

	{
		image:  ios,
		title: 'Orchestrated to be flexible',
		desc: 'Our tight integration with our messaging layers and our deployment process, we enable our service restructuring on any scale.'
	}
]

const DevlopServices = [
	{
		image: DevSerImage3,
		head: 'Micro Service Arch',
		desc: 'Our framework will provide integration with the best analytics platforms available in the market.',
	},
	{
		image: DevSerImage,
		head: 'Robust and Dynamic Caching',
		desc: 'We believe in building our components with functional paradigms so ensure scale and avoid duplication.',
	},
	{
		image: DevSerImage2,
		head: 'Persistence Designed',
		desc: 'Designed with Consistency and availability in mind. Structured for Apps and portals, to optimize SEO and discovery of your pages.',
	},
	{
		image: DevSerImage5,
		head: 'Security',
		desc: 'We understand the importance of client’s data. We ensure the best in context security for any system we design.',
	},
	{
		image: DevSerImage4,
		head: 'Pluggable',
		desc: 'We always believe that no project is going to remain small and we need to automate the feature development to deliver things on scale.',
	},
	{
		image: DevSerImage2,
		head: 'Flexible',
		desc: 'Our customer engagement tools will ensure that you will reach your customers on all channels. (Web, Mail & Mobile).',
	}
]

export default class cloudservice extends Component {
	render() {
		return (
			<>
				<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />

				<MobileAppSection servicehead ={servicehead} servicepara={servicepara} servicebtntext={servicebtntext} />

				<CmngridLayout AppDevelopment = {AppDevelopment} background={true}  headclr= {'#fff'} paraclr={'#fff'} container={true}/>

				<TechDesc Techtitle ={Techtitle} Techdesc={Techdesc} />

				<DevlopSerProcess devHead={devHead} devPara = {devPara} DevlopServices = {DevlopServices}/>

				<CmnLayout title={title} para={para} btntxt={btntxt}/>
			</>
		)
	}
}
