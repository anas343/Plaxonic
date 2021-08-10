import React, { Component } from 'react'
import arrow from '../../assests/arrow_right.png'


export default class mobile_apps extends Component {
    render() {
        return (
					<>
						<div className='container common-container-wdt  app_development_section common-pad'>
							<div className='app_txt-section'>
								<div className='head-txt-section'  data-aos="fade-up">
									<h2>{this.props.servicehead}</h2>
									<p>{this.props.servicepara}</p>
								</div>
								<div className='request-proposal'  data-aos="fade-up">
									<a href='#'>{this.props.servicebtntext}<span><img src= {arrow}/></span></a>
								</div>
							</div>
						</div>
					</>
        )
    }
}
