import { element } from 'prop-types'
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DevSerImage from '../../assests/dv1.svg'
import DevSerImage2 from '../../assests/dv2.svg'
import DevSerImage3 from '../../assests/dv3.svg'
import DevSerImage4 from '../../assests/dv4.svg'
import DevSerImage5 from '../../assests/dv5.svg'
import StageProcess1 from '../../assests/stag1.svg'
import StageProcess2 from '../../assests/stag2.svg'
import StageProcess3 from '../../assests/stag3.svg'
import StageProcess4 from '../../assests/stag4.svg'
import StageProcess5 from '../../assests/stag5.svg'
import StageProcess6 from '../../assests/stag6.svg'
import CaseStudy1 from '../../assests/srvs1.png'
import CaseStudy2 from '../../assests/srvs2.png'
import Previousbtn from '../../assests/prv-arrow-rht.svg'
import Nxtbtn from '../../assests/nxt-arrow.svg'

const DevlopServices = [
	{
		image: DevSerImage3,
		head: 'Smart Sensor Integration',
		desc: 'AR/VR Applications, Proximity Location, BLE Integration, and other IoT based high-end devices and sensors.',
	},
	{
		image: DevSerImage,
		head: 'NextGen Functionalities',
		desc: 'Embed future trends and practices to provide a superior customer experience and generate more revenue.',
	},
	{
		image: DevSerImage2,
		head: 'Enterprise Mobility',
		desc: 'Build a digital workplace to boost productivity while conforming to security frameworks and technology life cycles.',
	},
	{
		image: DevSerImage5,
		head: 'Security and Analytics',
		desc: 'Assessments for Governance, Risk and Security Compliance & Management, Testing, and Maintenance Services.',
	},
	{
		image: DevSerImage4,
		head: 'Post Launch Services',
		desc: 'App Updates, Monitor Crashes, Actionable analytics, Use Engagement Support, App Marketing Support, Optimization.',
	}
]

const InitialDevProcess = [
	{
		image: StageProcess1,
		title: 'Conceptualization',
		desc: 'Scope Definition, Requirement Analysis, App Flow'
	},

	{
		image: StageProcess2,
		title: 'Design Strategy',
		desc: 'Wireframing, Concept Design, UI Design, Visual, Micro-interactions'
	},

	{
		image: StageProcess3,
		title: 'App Architecture',
		desc: 'Modules Definition, Frameworks Creation, Defining Network, Database, and UI Layers'
	}

]


const LstDevProcess = [
	{
		image: StageProcess4,
		title: 'Development',
		desc: 'Frontend Development, Functionality Development, Backend Development, Code Review, Unit Testing'
	},

	{
		image: StageProcess5,
		title: 'Beta Release & QA',
		desc: 'Beta Testing, Feedback Incorporation, Quality Check, Usability, Performance Testing'
	},

	{
		image: StageProcess6,
		title: 'App Release',
		desc: 'Submission on App Store, Post Approval Testing, Enterprise Distribution'
	}
]


const sliderElements = [
	{
		src: CaseStudy2,
		title: 'TYPPD-IN',
		desc: 'The smart online food ordering app & platform',
	},
	{
		src: CaseStudy1,
		title: 'Fortune',
		desc: 'The smart online food ordering app & platform',
	},
	{
		src: CaseStudy1,
		title: 'Fortune',
		desc: 'The smart online food ordering app & platform',
	},
	{
		src: CaseStudy1,
		title: 'Fortune',
		desc: 'The smart online food ordering app & platform',
	},
]
export default class producDev extends Component {
	
	constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
	state = { currentSlide: 0 };

  handleAfterChange = (index) => {
    console.log("after change", index);
    this.setState({
      currentSlide: index
    });
  };

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			autoplay: false,
			arrows: false,
			slidesToScroll: 2,
			beforeChange: function (currentSlide, nextSlide) {
				console.log("before change", currentSlide, nextSlide);
			},
			afterChange: this.handleAfterChange
		};
		return (
			<>
				<div className='dvp-services-section'> 
					<div className='container common-container-wdt mob-excps-section common-pad'>
						<div className='exp-mob-hd' data-aos="fade-up">
							<h3>Develop engaging mobile experiences</h3>
							<p>Besides offering a full range of app development services, we help you in creating next generation high performing and feature-packed apps with innovative services.</p>
						</div>
						<div className='engage-services'>
							{ DevlopServices.map((element) => ( 
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

				<div className='app-build-process common-pad'>
					<div className= 'container common-container-wdt' data-aos="fade-up">
						<h2>Our app development process</h2>
						<p>Our app development process ensures operational efficiency, cost-effectiveness, and overall market standing while creating engaging apps irrespective of what device plan our clients come with.</p>
						<div className='app-process-stage'>
							<div className='process-build' data-aos="fade-up"> 
								{ InitialDevProcess.map((element) => ( 
								<div className='build-process-image'>
									<img src={element.image} alt=''  data-aos="fade-up"/>
									<h3>{element.title}</h3>
									<p>{element.desc}</p>
								</div>
								))}
							</div>
						</div>
					</div>

					<div className='dotted-line-section'>
						<div className='container-fluid stage-number'>
							<div className='stage1 blu-clr'  data-aos="fade-up">
								<span>01</span>
							</div>
							<div className='stage1 blk-color' data-aos="fade-up">
								<span>02</span>
							</div>
							<div className='stage1 blu-clr' data-aos="fade-up">
								<span>03</span>
							</div>
							<div className='stage1 blk-color' data-aos="fade-up">
								<span>04</span>
							</div>
							<div className='stage1 blu-clr' data-aos="fade-up">
								<span>05</span>
							</div>
							<div className='stage1 blk-color' data-aos="fade-up">
								<span>06</span>
							</div>
						</div>
					</div>
					<div className='container common-container-wdt'>
						<div className='app-process-stage'>
							<div className='process-build' data-aos="fade-up">
								{ LstDevProcess.map((element) => ( 
								<div className='build-process-image relat-lft'>
									<img src={element.image} alt='' data-aos="fade-up" />
									<h3>{element.title}</h3>
									<p>{element.desc}</p>
								</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='srvs-slider-section common-pad'>
					<Slider ref={c => (this.slider = c)} {...settings}>
						{ sliderElements.map((element) => (										
						<div className="slider">
							<div className="slider__item">
								<img src={element.src} alt="product-first"/>
								<div className="content-desc" data-aos="fade-up">
									<h2>{element.title}</h2>
									<p>{element.desc}</p>
								</div>
							</div>
						</div>
						))}
					</Slider>
					<div className="case-sld-btns" data-aos="fade-up">
						<div className='previous-lft-btn'>
							<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={this.previous}>
								<path d="M29.9688 26.9019L26.4333 30.4374L5.22009 9.22422L5.22009 28.6697H0.199638V0.66823H28.2011L28.2011 5.68869L8.75563 5.68869L29.9688 26.9019Z" fill="white"/>
							</svg>
						</div>
						<div className='previous-rht-btn'>
							<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.next}>
								<path d="M14.0312 42.9019L17.5667 46.4374L38.7799 25.2242L38.7799 44.6697H43.8004V16.6682H15.7989L15.7989 21.6887L35.2444 21.6887L14.0312 42.9019Z" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
			</>
		)
	}
}
