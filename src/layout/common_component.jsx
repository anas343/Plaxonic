import React, { Component } from 'react'
import connectarrow from '../assests/bl_arrow.svg'
import '../layout/style.css'

export default class common_component extends Component {
	render() {
		return (
			<>
				<div className="grow_bussiness">
					<div className="container buss-grid">
						<div className="txt-sec" data-aos="fade-up">
							<h1>Are you ready to start building your modern digital business?</h1>
							<p>Cras habitant quisque pellentesque pellentesque aliquam.</p>
						</div>
						<div className="connect-with-us" data-aos="fade-up"> 
							<a href="">Connect with us <span><img src={connectarrow} alt=""/></span></a>
						</div>
					</div>
				</div>	
			</>
		)
	}
}
