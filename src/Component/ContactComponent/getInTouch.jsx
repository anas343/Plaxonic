import React, { Component } from 'react'
import '../ContactComponent/contact.css'
import BannerInfo from '../ContactComponent/gettouchbanner'
import ConnectForm from '../ContactComponent/getform'
import QuerySection from '../ContactComponent/queryquestion'

export default class getInTouch extends Component {
	render() {
		return (
			<>
				<BannerInfo/>
				
				<ConnectForm/>

				<QuerySection/>
			</>
		)
	}
}
