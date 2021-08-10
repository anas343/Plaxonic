import React, { Component } from 'react'
import SmartTv from '../../assests/smart-tv.svg'
import SmartPhone from '../../assests/smartphone.svg'
import SmartWatch from '../../assests/smartwatch.png'
import Tablet from '../../assests/tablet.svg'
import '../../App'

const gridApp = [
	{
		src:  SmartPhone,
		txt: 'Smartphone'
	},
	{
		src:  Tablet,
		txt: 'Tablet'
	},
	{
		src:  SmartTv,
		txt: 'Smart Tv'
	},
	{
		src:  SmartWatch,
		txt: 'Wearable'
	}
]


export default class gridappdev extends Component {
	render() {
		
		return (
			<>
				<div className='container common-container-wdt aaps-development-section common-pad'>
					<div className='apps-devlopment-grid' data-aos="fade-up">
						<h2>App development for the whole ecosystem</h2>
						<p>Our Application Development not only covers Smartphones but also focus on Tablets, Wearables, and Smart TV from concept to a myriad of post launch services.</p>
						<div className='grid-ecosystem'>
							{gridApp.map((element) => ( 
								<div className='grid-eco1'>
									<div className='grid-img-content' data-aos="fade-up">
										<img src={element.src} alt=''/>
										<span>{element.txt}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}
}
