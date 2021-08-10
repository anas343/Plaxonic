import React, { Component } from 'react'
import StyWork from '../../assests/tm.png'

export default class story extends Component {
	render() {
		return (
			<>
				<div className='container common-container-wdt common-pad'>
					<div className='our-story-sec'>
						<div className='story-content'>
							<h2>Our story</h2>
							<p>Founded on 5 September 2013 and headquartered in Noida, India, with branches in Bangalore, Dubai, USA, and the Hong Kong, Plaxonic Technologies has come a long way in the IT Industry. From a small team of 7 people to 100+ Plaxonians, we attain a prominent leading global IT company position today. What started as a journey to bring a significant change in the ordinary corporate World has empowered thousands of businesses around the globe with unique ideas and innovative IT solutions.</p>
							<p>Shaan Rizvi, CEO, Plaxonic Technologies, started the organisation with the motto of “Invent & Innovate”, his direction, vision, and leadership have helped Plaxonic achieve big.</p>
							<p>We’ve got a team of highly skilled professionals who blend together their creativity to achieve milestones and customer satisfaction.</p>
						</div>
					</div>
					<div className='sec-grid-sty'>
						<div className='gd-img-sec'>
							<img src= {StyWork}/>
						</div>
						<div className='gd-content'>
							<div className='gd-bx1'>
								<p>“We foresee the future, we originate ideas, we befriend corporate challenges & we create the unbelievable.”</p>
								<span>-plaxonic Technologies</span>
							</div>
							<div className='gd-bx2'>
								<p>An organization with some of the most intellectual minds working together, Plaxonic believes in - “inventing advanced technologies & innovating them further to invent more.” We engineer smart IT & BPM solutions that understand, meet and deliver business expectations of our client base. Merging together our years of expertise and ambitious strategies, we serve the ever evolving corporate world with services.</p>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
