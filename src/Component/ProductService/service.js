import React, { Component } from 'react'
import ServiceBanner from './service_banner'
import '../../layout/font-family/libra_franklin.css'
import MobileAppSection from './mobile_apps'
import DevlopProcess from './producDev'
import CmnLayout from '../../layout/common_component'
import './service.css'


export default class service extends Component {

	componentDidMount() {
		document.title = this.props.title;
	}

    render() {
			return (
				<>
					{/* Service Banner Component */}
						<ServiceBanner/>
					{/* Service Banner End */}

					{/* Mobile App  Component */}
						<MobileAppSection/>
					{/* Mobile App End*/}

					{/* App Developement Component */}
						<DevlopProcess/>
					{/* App End */}

					{/* Common Component */}
						<CmnLayout/>
					{/* Common Component end */}
				</>
			)
    }
}
