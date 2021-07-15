import React, { Component } from 'react'
import arrow from '../../assests/arrow_right.png'
import hybrid from '../../assests/android_app.svg'
import android from '../../assests/android.svg'
import ios from '../../assests/hybrid.svg'
import mobile from '../../assests/ios.svg'


export default class mobile_apps extends Component {
    render() {
        return (
					<>
						<div className='container app_development_section common-pad'>
							<div className='app_txt-section'>
								<div className='head-txt-section'>
									<h2>Mobile apps development</h2>
									<p>We build powerful, scalable, interactive and high quality app solutions to boost your mobile existence and impact on your smart growth.</p>
								</div>
								<div className='request-proposal'>
									<a href='#'>Request a proposal <span><img src= {arrow}/></span></a>
								</div>
							</div>
							<div className='app_section-grid'>
								<div className= 'common_app_boxes'>
									<div className='app_box-1'>
										<img src= {mobile} alt=''/>
										<h3>Mobile App Consultancy</h3>
										<p>Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy.</p>
									</div>
									<div className='app_box-1'>
										<img src= {android} alt=''/>
										<h3>Mobile App Consultancy</h3>
										<p>Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy.</p>
									</div>
									<div className='app_box-1'>
										<img src= {ios} alt=''/>
										<h3>Mobile App Consultancy</h3>
										<p>Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy.</p>
									</div>
									<div className='app_box-1'>
										<img src= {hybrid} alt=''/>
										<h3>Mobile App Consultancy</h3>
										<p>Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy.</p>
									</div>
								</div>
							</div>
						</div>
					</>
        )
    }
}
