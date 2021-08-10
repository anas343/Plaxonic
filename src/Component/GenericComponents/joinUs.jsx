import React, { Component } from 'react'
import connectarrow from '../../assests/bl_arrow.svg'
import './style.css'

export default class joinUs extends Component {
	
	render() {
		return (
			<>
				<div className="grow_bussiness">
					<div className="container common-container-wdt buss-grid">
						<div className="txt-sec" data-aos="fade-up">
							<h2>{this.props.title}</h2>
							<p>{this.props.para}</p>
						</div>
						<div className="connect-with-us" data-aos="fade-up"> 
							<a href="">{this.props.btntxt} <span><img src={connectarrow} alt=""/></span></a>
						</div>
					</div>
				</div>	
			</>
		)
	}
}
