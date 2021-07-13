import React, { Component } from 'react'
import home from '../../assests/home.svg'
export default class service_banner extends Component {
	render() {
		return (
			<div className='services-provide-section'>
				<div className='service-back'>
					<div className='container service-content'>
						<p><img src={home} alt='home-icon'/> <span>Services</span>  Engineering</p>
					</div>
				</div>
			</div>
		)
	}
}
