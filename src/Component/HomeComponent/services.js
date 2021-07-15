import React, { Component } from 'react'
import Uparrow from '../../assests/right-up-arrow.svg'
import RightArrow from '../../assests/arrow_right.png'
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';


export default class services extends Component {
    render() {
        return (
            <>
							<div className="container services-section common-pad">
								<div className="service-detail" data-aos="fade-up">
									<h2>ABOUT US</h2>
									<div className= "about-section">
										<div className="head-detail">
											<h3>We're a brand and digital studio working to create meaningful value for people and the planet.</h3>
										</div>
										<div className="para-detail"> 
											<p>Imperdiet quisque praesent risus, at nisi, morbi malesuada libero lorem. Non, aliquam fermentum consequat auctor consectetur sit. Porta interdum bibendum id scelerisque. Volutpat pretium nam feugiat in amet. Viverra aenean sit libero, erat pellentesque sed vitae elit eu sit.</p>
										</div>
									</div>
								</div>
								<div className="about-service-desc" data-aos="fade-up">
									<div className="ser_box-1">
										<h5>01</h5>
										<p>Our Diversity Is Our Strength</p>
										<a href="#">Overview 
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                      </svg>
                      </a>
									</div>
									<div className="ser_box-2">
										<h5>02</h5>
										<p>Small acts can tranform the world</p>
										<a href="#">Corporate Responsibility 
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                      </svg>
                    </a>
									</div>
									<div className="ser_box-3">
										<h5>03</h5>
										<p>Whatever it takes to encourage our people</p>
										<a href="#">Culture
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                      </svg>
                    </a>
									</div>
								</div>
								<div className="services-provide-section common-pad" data-aos="fade-up">
									<div className="service-portal">
										<h4>OUR SERVICES</h4>
										<div className="srv-detail">
											<div className="service-hd">
												<h5>We build brands and innvotive products</h5>
												<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer. Cras habitant quisque pellentesque pellentesque aliquam.</p>
											</div>
											<div className="service-btn">
												<a href="#">Get in touch <span><img src={RightArrow} alt="txt"/></span></a>
											</div>
										</div>
										<div className="all-services" data-aos="fade-up">
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
                          <h2>Engineering</h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
													<h2>Digital Transformation </h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
													<h2>Emerging Technologies</h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
													<h2>Cloud & DevOps</h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
													<h2>Augmentation</h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
											<div className="provide_srv">
												<a href="#">
                          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.01558 20.1165L8.78335 21.8842L19.39 11.2776L19.39 21.0004H21.9002V6.99964H7.89947L7.89947 9.50987L17.6222 9.50987L7.01558 20.1165Z" fill="black"/>
                          </svg>
													<h2>Quality Engineering</h2>
												</a>
												<p>Cras habitant quisque pellentes pellentesque aliquam.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="project-succ">
								<div className="container delivered-services" data-aos="fade-up"> 
									<h2>Numbers that matter</h2>
									<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer.</p>
									<div className="project-count">
										<div className="project-services">
											<h2><CountUp  end={200} delay={4} duration={10}/></h2>
											<p>Team</p>
										</div>
										<div className="project-services">
											<h3>06</h3>
											<p>Offices</p>
										</div>
										<div className="project-services">
											<h2><CountUp end={35} delay={4} duration={10}/></h2>
											<p>Nations Served</p>
										</div>
										<div className="project-services">
											<h2><CountUp end={3500}  delay={4} duration={10}/></h2>
											<p>Projects Delivered</p>
										</div>
									</div>
								</div>
							</div>
						</>
        )
    }
}
