import React, { Component } from 'react'
import home from '../../assests/home.svg'

export default class service_banner extends Component {
	render() {
		return (
			<div className='prd-service-section'>
				<div className='service-back'>
					<div className='container'>
						<div className='service-content'>
							<span><img src={home} alt='home-icon'/> </span>
							<ul>
								<li>Services</li>
								<li>Engineering</li>
								<li>Mobile apps development</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
