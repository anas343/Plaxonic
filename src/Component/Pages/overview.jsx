import React, { Component } from 'react'
import ServiceBanner from '../GenericComponents/serviceBanner'
import NumberCounter from '../HomeComponent/numbercounter'
import CmmonLayout from '../ProductService/cmngridlayout'
import bannerImage from '../../assests/overview_group.png'
import OurStory from './story'
import './pages.css'
import hybrid from '../../assests/Group 51.svg'
import android from '../../assests/Group 52.svg'
import ios from '../../assests/Group 53.svg'
import mobile from '../../assests/Group 54.svg'
import Expert from './expert'

const AppDevelopment = [
	{
		image:  hybrid,
		title: 'Grow Together',
		desc:  'We empower and activate people and businesses to reach their full potential.'
	},

	{
		image:  mobile,
		title: 'Create Client Value',
		desc: 'We exceed client expectations. Always.'
	},

	{
		image:  ios,
		title: 'Innovate',
		desc: 'We exceed client expectations. Always.'
	},

	{
		image: android,
		title: 'Deliver Excellence',
		desc: 'We’re accountable to ourselves and to every client and colleague. No excuses. Ever.'
	}
]


const bannerHead = [
	{
		title: 'About'
	},

	{
		title: 'Overview'
	}
]

export default class overview extends Component {
	render() {
		return (
			<>
				<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />

				<OurStory/>

				<NumberCounter  headclr={'#1BA3DD'} paraclr={'#000'} />
        
				<CmmonLayout AppDevelopment= {AppDevelopment} container= {true} headclr= {'#000'} paraclr={'#000'}/>

				<Expert/>

			</>
		)
	}
}
