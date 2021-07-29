import React, { Component } from 'react'
import IndiaFlag from '../../assests/india.png'
import HKongFlag from '../../assests/hong-kong.png'
import DubaiFlag from '../../assests/Dubai.png'
import USAFlag  from '../../assests/united.png'
import PinIcon from '../../assests/pin.svg'
import CallIcon from '../../assests/call.svg'
import { element } from 'prop-types'
import mapImage from '../../assests/map.png'
import connectarrow from '../../assests/bl_arrow.svg'

const CompanyAddress = [
	{
		image: IndiaFlag,
		head: 'India',
		address: 'B-10, Sec-59, Noida, 201301, India',
		contact: '+91-120-4211120',
		pinIcon : PinIcon,
		callIcon: CallIcon
	},
	{
		image: USAFlag,
		head: 'USA',
		address: '102 Tarpon Ave, Tarpon Springs, FL 34689, US',
		contact: '+1-800-3684805',
		pinIcon : PinIcon,
		callIcon: CallIcon
	},
	{
		image: DubaiFlag,
		head: 'Dubai',
		address: 'Techno Hub 2, Dubai Silicon Oasis (DSO), Dubai, UAE',
		contact: '050 925 0114 ',
		pinIcon : PinIcon,
		callIcon: CallIcon
	},
	{
		image: HKongFlag,
		head: 'Hong Kong',
		address: 'Room 901, Centre Point, 181-185 Gloucester Road, Wan Chai, Hong Kong',
		contact: '+1-800-3684805',
		pinIcon : PinIcon,
		callIcon: CallIcon
	}
]


export default class queryquestion extends Component {
 
	render() {
		return (
			<>
				<div className='container connect-query-sec common-container-wdt common-pad'>
					<div className='get-query-section'>
						<div className='query-txt-info' data-aos="fade-up">
							<h2>Get answers to your questions about products, sales, support or anything else Plaxonic</h2>
							<p>Plaxonic alumni, please write to the following for your queries:</p>
						</div>
						<div className='query-mail-sec'>
							<div className='query-content'>
								<div className='mail-info' data-aos="fade-up">
									<h2>Need more assistance ?</h2>
									<h3>contact@plaxonic.com</h3>
								</div>
								<div className='mail-info' data-aos="fade-up">
									<h2>hr helpdesk</h2>
									<h3>hr@plaxonic.com</h3>
								</div>
							</div>
						</div>
					</div>

					<div className='map-content-section'>
						<div className='country-grid'>
							{ CompanyAddress.map((element) => (
							<div className='grid-map1' data-aos="fade-up">
								<img src={element.image} alt=''/>
								<h2>{element.head}</h2>
								<span><img src={element.pinIcon}/></span><h3>{element.address}</h3>
								<span><img src={element.callIcon}/></span><h4>{element.contact}</h4>
							</div>
							))}
						</div>
					</div>
				</div>	

				<div className='career-insight-sec'>
					<div className='container common-container-wdt common-pad career-insight'>
						<div className="txt-sec" data-aos="fade-up">
							<h2>See what we do, how we work, and how you can join us</h2>
							<p>Cras habitant quisque pellentesque pellentesque aliquam..</p>
						</div>
						<div className="connect-with-us" data-aos="fade-up"> 
							<a href="">Explore Plaxonic careers<span><img src={connectarrow} alt=""/></span></a>
						</div>
					</div>
				</div>
			</>
		)
	}
}
