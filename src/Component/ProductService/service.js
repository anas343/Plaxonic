import React, { Component } from 'react'
import ServiceBanner from './service_banner'
import MobileAppSection from './mobile_apps'
import './service.css'

export default class service extends Component {
    render() {
			return (
				<>
					{/* Service Banner Component */}
						<ServiceBanner/>
					{/* Service Banner End */}

					{/* Mobile App  Component */}
						<MobileAppSection/>
					{/* Mobile App End*/}
				</>
			)
    }
}
