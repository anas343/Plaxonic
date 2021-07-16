import React, { Component } from 'react'
import Person from '../../assests/person.png'
import Quote from '../../assests/quotes.png'
import Twitter from '../../assests/twitter.svg'
import Linkdein from '../../assests/linkdein.svg'
import arrow from '../../assests/right_arrow.svg'
import developerImage from '../../assests/person2.jpg'
import connectarrow from '../../assests/bl_arrow.svg'
import designerImage from '../../assests/person1.jpg'
import perosnImage from '../../assests/person3.jpg'

export default class career extends Component {
    render() {
        return (
					<>
						<div className="intro-career-sec">
							<div className="career-section">
								<div className="dept-detail">
									<div className="img-dept-content" data-aos="fade-up">
										<img src={Person} alt="dept-image"/>
									</div>
									<div className="txt-dept-sec" data-aos="fade-up">
										<img src={Quote} alt="quotes"/>
										<p>“Praesent gravida accumsan, at nec rhoncus rhoncus, ornare. Odio place rat sit mi velit consequat scelerisque libero. Nunc fermentum, fermentum, amet, consequat turpis faucibus semper phasellus pellentesque. Lorem adipiscing sagittis malesuada nec ultricies ut.”</p>
										<h2>John Richard</h2>
										<h4>Manager - Dept</h4>
										<h3>Joined in Sep 2013</h3>
										<div className="social-icon">
											<a href="#"><img src= {Twitter} alt= ""/></a>
											<a href="#"><img src= {Linkdein} alt= ""/></a>
										</div>
									</div>
								</div>
							</div>
							<div className="team-section" data-aos="fade-up">
								<div className="container" data-aos="fade-up">
									<div className="connect-team">
										<h2>Join our team</h2>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
										<a href="#">Check current opening <span><img src={arrow}/></span></a>
									</div>
									<div className="centr-team-img common-obj-wdt">
										<img src= {developerImage} alt/>
									</div>
								</div>
								<div className='left-sec-img common-obj-wdt'>
									<img src={designerImage} alt=''/>
								</div>
								<div className='rght-sec-img common-obj-wdt'>
						   		<img src={perosnImage} alt=''/>
								</div>
							</div>
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
						</div>
					</>
        )
    }
}
