import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
					<>
						<div className="footer-content">
							<div className="footer-main-content">
								<div className="footer-list">
									<ul>
										<li>Technologies</li>
										<li>Locations</li>
										<li>Privacy Policy</li>
										<li>Terms of use</li>
										<li>Sitemap</li>
									</ul>
								</div>
								<div className="country-slt-drpdown">
									<div className="drp-menu"> 
										<span><img src="" alt=""/></span><p>IN</p>
										<span className="drparrow"></span>
									</div>
								</div>
							</div>
						</div>
					</>
        )
    }
}
