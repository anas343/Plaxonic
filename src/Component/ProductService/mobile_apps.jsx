import React, { Component } from 'react'
import arrow from '../../assests/arrow_right.png'
import hybrid from '../../assests/android_app.svg'
import android from '../../assests/android.svg'
import ios from '../../assests/hybrid.svg'
import mobile from '../../assests/ios.svg'
import SmartTv from '../../assests/smart-tv.svg'
import SmartPhone from '../../assests/smartphone.svg'
import SmartWatch from '../../assests/smartwatch.png'
import Tablet from '../../assests/smartwatch.png'

const AppDevelopment = [
		{
			image: mobile,
			title: 'Mobile App Consultancy',
			desc: 'Strategic Product Definition, Business and Market Insights, Concept Validation, Features Prioritization, Usability Testing, Content Strategy, Data Opportunity Strategy'
		},

		{
			image: android,
			title: 'Android App Development',
			desc: 'Extensive experience in native Android development ensures that we create high quality apps to increase your customer base by millions.'
		},

		{
			image:  ios,
			title: 'iOS App Development',
			desc: 'We create end-to-end tailor-made iOS solutions using latest SDKs and with a seamless native user interface design for enterprises belonging to all domains.'
		},

		{
			image: hybrid,
			title: 'Hybrid App Development',
			desc: 'We build cross-platform apps with tried and tested technologies that give the ability to leverage reusable code and go market faster on multiple platforms more economically.'
		}
]

export default class mobile_apps extends Component {
    render() {
        return (
					<>
						<div className='container app_development_section common-pad'>
							<div className='app_txt-section'>
								<div className='head-txt-section'  data-aos="fade-up">
									<h2>Mobile apps development</h2>
									<p>We build powerful, scalable, interactive and high quality app solutions to boost your mobile existence and impact on your smart growth.</p>
								</div>
								<div className='request-proposal'  data-aos="fade-up">
									<a href='#'>Request a proposal <span><img src= {arrow}/></span></a>
								</div>
							</div>
							<div className='app_section-grid'>
								<div className= 'common_app_boxes'>
									{ AppDevelopment.map((element) => ( 
										<div className='app_box-1'>
											<div className='box-aap-content' data-aos="fade-up">
												<img src= {element.image} alt=''/>
												<h3>{element.title}</h3>
												<p>{element.desc}</p>
											</div>
										</div>
									))}
								</div>
								<div className='aaps-development-section common-pad'>
									<div className='apps-devlopment-grid' data-aos="fade-up">
										<h2>App development for the whole ecosystem</h2>
										<p>Our Application Development not only covers Smartphones but also focus on Tablets, Wearables, and Smart TV from concept to a myriad of post launch services.</p>
										<div className='grid-ecosystem'>
											<div className='grid-eco1'>
												<div className='grid-img-content' data-aos="fade-up">
													<img src={SmartPhone} alt=''/>
													<span>Smartphone</span>
												</div>
											</div>
											<div className='grid-eco1'>
												<div className='grid-img-content' data-aos="fade-up">
													<img src={Tablet} alt=''/>
													<span>Tablet</span>
												</div>
											</div>
											<div className='grid-eco1'>
												<div className='grid-img-content' data-aos="fade-up">
													<img src={SmartTv} alt=''/>
													<span>Smart TV</span>
												</div>
											</div>
											<div className='grid-eco1'>
												<div className='grid-img-content ' data-aos="fade-up">
													<img src={SmartWatch} alt=''/>
													<span>Wearable</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='tech-section common-pad'>
							<div className='tech-banner-section'>
								<div className='container'>
									<div className='tech-txt-content' data-aos="fade-up"> 
										<h4>Technology stack we base our apps on!</h4>
										<p>Our strategic thinkers and tech geeks are proficient at working around the different Technology Stack, Design Methodology, UI/UX, and users expectations every device comes with.</p>
									</div>
								</div>
							</div>
						</div>

					</>
        )
    }
}
