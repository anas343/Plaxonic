import React, { Component } from 'react'
import '../ContactComponent/contact.css'
import ServiceBanner from '../GenericComponents/serviceBanner'
import ConnectForm from '../ContactComponent/getform'
import QuerySection from '../ContactComponent/queryquestion'
import JoinUs from '../GenericComponents/joinUs'
import bannerImage from '../../assests/getIntounch.png'

const title = 'See what we do, how we work, and how you can join us'
const para = 'Cras habitant quisque pellentesque pellentesque aliquam.'
const btntxt = 'Explore Plaxonic careers'

const bannerHead = [
	{
		title: 'Contact'
	}
]

export default class getInTouch extends Component {
	render() {
		return (
			<>
				<ServiceBanner bannerImage = {bannerImage} bannerHead= {bannerHead} />
				
				<ConnectForm/>

				<QuerySection/>

				<JoinUs title={title} para={para} btntxt={btntxt}/>
			</>
		)
	}
}
