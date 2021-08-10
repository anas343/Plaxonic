import React, { Component } from 'react'

export default class devlopprocess extends Component {
	render() {
		return (
			<>
				<div className='dvp-services-section'> 
					<div className='container common-container-wdt mob-excps-section common-pad'>
						<div className='exp-mob-hd' data-aos="fade-up">
							<h3>{this.props.devHead}</h3>
							<p>{this.props.devPara}</p>
						</div>
						<div className='engage-services'>
							{ this.props.DevlopServices.map((element) => ( 
								<div className='develop-services' data-aos="fade-up" data-duration='500'>
									<div className='dev-prd-image' data-aos="fade-up">
										<img src={element.image} alt='' data-duration='500'/>
									</div>
									<h3>{element.head}</h3>
									<p>{element.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}
}
