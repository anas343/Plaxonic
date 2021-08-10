import React, { Component } from 'react'

export default class techdesc extends Component {
	render() {
		return (
			<>
				<div className='tech-section common-pad'>
					<div className='tech-banner-section'>
						<div className='container common-container-wdt'>
							<div className='tech-txt-content' data-aos="fade-up"> 
								<h4>{this.props.Techtitle}</h4>
								<p>{this.props.Techdesc}</p>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
