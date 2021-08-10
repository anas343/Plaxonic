import React, { Component } from 'react'
import home from '../../assests/home.svg'
import './style.css'

export default class serviceBanner extends Component {
	render() {
		return (
			<>
				<div className='prd-service-section'>
					<div className='service-back'style={{background: `linear-gradient(88.89deg, #000000 -23.17%, rgba(0, 0, 0, 0) 65.41%),url(${this.props.bannerImage})`,   backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
						<div className='container common-container-wdt'>
							<div className='service-content'>
								<span><img src={home} alt='home-icon' data-aos="fade-up" /> </span>
								<ul  data-aos="fade-up">
								{this.props.bannerHead.map((element) => {
									return <li>{element.title}</li>
								})}
								</ul>	
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
