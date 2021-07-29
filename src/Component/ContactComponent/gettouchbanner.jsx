import React, { Component } from 'react'
import home from '../../assests/home.svg'
import '../ContactComponent/contact.css'
export default class gettouchbanner extends Component {
	render() {
		return (
			<>
				<div className= 'connect-get-section'>
					<div className='get-backcover'>
						<div className='container common-container-wdt'>
							<div className='get-service-content'>
								<span><img src={home} alt='' data-aos="fade-up"/></span>
								<ul data-aos="fade-up">
									<li>Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
