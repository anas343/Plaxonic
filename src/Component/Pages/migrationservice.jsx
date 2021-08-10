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
const servicehead = 'Migration Service'
const servicepara = 'Migrate to public, private or hybrid Cloud with the experts in Multi-Cloud Infrastructure. We deliver complex migrations in a trouble-free and organized manner while faster, cost-effective and successful transition with zero business impact.'
const servicebtntext = 'Request a proposal' 
const Techtitle = 'Our Approach to achieve successful transition to cloud'
const Techdesc = 'Given your organization’s fundamental requirements around time-to-market, security and global delivery, a migration path based on chosen infrastructure is defined to support the infrastructure transformation project. The same is applicable for cloud-to-cloud movement, Migration of workloads, validation and performance testing, and operations run books.'


const bannerHead = [
	{
		title: 'Migration Service'
	}
]

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Cloud Adoption Strategy',
		desc: 'We advise you in determining the right cloud model based on the business case, ROI projections and your organization’s needs.'
	},

	{
		image:  mobile,
		title: 'Discovery & Planning',
		desc: 'We develop a plan to migrate and modernize so you can take advantage of the cloud infrastructure, unlock potential business value and improve business agility'
	},

	{
		image:  ios,
		title: 'Workloads Migration',
		desc: 'We help you on workload, application and DevOps transformation, along with various operating and disposition models.'
	},

	{
		image: android,
		title: 'Manage Environments at Scale',
		desc: 'Smoothly transition and manage your application portfolios with integrated service-level management and a scalable, agile DevOps cloud platform and security services.'
	}
	
]

export default class migrationservice extends Component {
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
