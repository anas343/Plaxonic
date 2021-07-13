import React, { Component } from 'react'
import flag1 from '../assests/flag1.svg'
import { $ }  from 'react-jquery-plugin'
import { findDOMNode } from 'react-dom'
import Brand from '../assests/logo.svg'
import Arrow from '../assests/aligned.svg'
import twitter from '../assests/twitt.svg'
import facebook from '../assests/facebook.svg'
import insta  from '../assests/Insta.svg'
import linkdein from '../assests/linkd.svg'
import youtube from '../assests/youtube.svg'
import flag2 from '../assests/flag2.svg'


export default class Footer extends Component {
	componentDidMount() {
		$('.drp-menu').click(function() {
			if ($('.drparrow').hasClass('droparrowup') === true) {
				$('.drparrow').removeClass('droparrowup');
				$('.drp-menu ul').hide();
			}
			else {
				$('.drparrow').addClass('droparrowup');
				$('.drp-menu ul').show();
			}
		});
		$('.country-cd-lst').click(function() {
			var postVal = $(this).attr('value');
			 if (postVal === "EN") {
				$(".country-cd").text(postVal);
				$(".country-nm").text("India");
				$(".flag-icon img").attr("src", flag1);
			 }
			 else {
				$(".country-cd").text(postVal);
				$(".country-nm").text("Dubai");
				$(".flag-icon img").attr("src", flag2);
			 }
		});
	}
    render() {
        return (
          <div className="footer-background">
						<div className="footer-content container">
							<div className="footer-main-content">
								<div className="footer-list">
									<ul>
										<li><a href="#">Technologies</a></li>
										<li><a href="#">Locations</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms of use</a></li>
										<li><a href="#">Sitemap</a></li>
									</ul>
								</div>
								<div className="country-slt-drpdown">
									<div className="drp-menu"> 
										<span className="flag-icon"><img src={flag1} alt=""/></span><p><span className="country-nm">India</span> | <span className='country-cd'>EN </span><span className="drparrow"></span></p>
										<ul>
											<li className='country-cd-lst' value="EN">EN</li>
											<li className='country-cd-lst' value="AE">AE</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="news-letter-sec">
								<div className="news-section">
									<div className='logo-section'>
										<img src= {Brand} alt=''/>
									</div>
									<div className='news-letter-form'>
										<form>
											<div className='news-update-info'>
												<div className='news-letter-input'>
													<input type='text' placeholder='Stay in the know with our newsletter' />
												</div>
												<div className='news-letter-submit'>
													<label>
														<input type="submit"/>
														<img src ={Arrow} alt=''/>
													</label>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className='footer-bottom-para'>
									<p>Plaxonic is an IT consulting and services company which assists clients achieve digital transformation. With our team of hackers and hustlers of code, consultants and designers, we work on innovative technologies to deliver unmatched functionalities. Operating in 6 countries with clients in 40 countries across the world, we are consistently regarded as one of the best places to work.</p>
								</div>
								<div className='social-icon-grid'>
									<div className='social-icons'>
										<ul>
											<li><a href='#'><img src= {linkdein} alt=''/></a></li>
											<li><a href='#'><img src= {twitter} alt=''/></a></li>
											<li><a href='#'><img src= {facebook} alt=''/></a></li>
											<li><a href='#'><img src= {insta} alt=''/></a></li>
											<li><a href='#'><img src= {youtube} alt=''/></a></li>
										</ul>
									</div>
									<div className='copyright-txt'>
										<p>© 2021 Plaxonic. All Rights Reserved.</p>
									</div>
								</div>
							</div>
						</div>
          </div>
        )
    }
}
