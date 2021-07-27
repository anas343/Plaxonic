import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import Uparrow from '../../assests/arrow_right.png'
import CaseImage1 from '../../assests/case1.jpg'
import CaseImage2 from '../../assests/case2.jpg'
import CaseImage3 from '../../assests/case3.jpg'
import Next from '../../assests/next.svg'
import Previous from '../../assests/previous.svg'




const sliderElements = [
	{
		title: 'App Development',
		head: 'Hexaware Featured in Business Focus Magazine for Strong Partnership...',
		para: 'We have been featured in the Business Focus Magazine for our contribution to Inchcape Shipping Services’ successful digital transformation.',
		src : CaseImage2,
		customTxt: 'Case study'
	},

	{
		title: 'Artificial Intelligence',
		head: 'Raise the reef: AI helps power coral reef restoration',
		para: 'Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.',
		src : CaseImage3,
		customTxt: 'Case study'
	},

	{
		title: 'App Development',
		head: 'Hexaware Featured in Business Focus Magazine for Strong Partnership...',
		para: 'We have been featured in the Business Focus Magazine for our contribution to Inchcape Shipping Services’ successful digital transformation.',
		src : CaseImage2,
		customTxt: 'Case study'
	},

	{
		title: 'Artificial Intelligence',
		head: 'Raise the reef: AI helps power coral reef restoration',
		para: 'Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.',
		src : CaseImage3,
		customTxt: 'Case study'
	},
	{
		title: 'App Development',
		head: 'Hexaware Featured in Business Focus Magazine for Strong Partnership...',
		para: 'We have been featured in the Business Focus Magazine for our contribution to Inchcape Shipping Services’ successful digital transformation.',
		src : CaseImage2,
		customTxt: 'Case study'
	},

	{
		title: 'Artificial Intelligence',
		head: 'Raise the reef: AI helps power coral reef restoration',
		para: 'Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.',
		src : CaseImage3,
		customTxt: 'Case study'
	},
	{
		title: 'App Development',
		head: 'Hexaware Featured in Business Focus Magazine for Strong Partnership...',
		para: 'We have been featured in the Business Focus Magazine for our contribution to Inchcape Shipping Services’ successful digital transformation.',
		src : CaseImage2,
		customTxt: 'Case study'
	},

	{
		title: 'Artificial Intelligence',
		head: 'Raise the reef: AI helps power coral reef restoration',
		para: 'Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.',
		src : CaseImage3,
		customTxt: 'Case study'
	},
	{
		title: 'App Development',
		head: 'Hexaware Featured in Business Focus Magazine for Strong Partnership...',
		para: 'We have been featured in the Business Focus Magazine for our contribution to Inchcape Shipping Services’ successful digital transformation.',
		src : CaseImage2,
		customTxt: 'Case study'
	},

	{
		title: 'Artificial Intelligence',
		head: 'Raise the reef: AI helps power coral reef restoration',
		para: 'Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.',
		src : CaseImage3,
		customTxt: 'Case study'
	}

]

export default class casestudyslider extends Component {

	componentDidMount() {
		// Set Image height on homepage //
		$(document).ready(function(){

			// Select and loop the container element of the elements you want to equalise
			$('.case-study-section').each(function(){  

				// Cache the highest
				var highestBox = 0;

				// Select and loop the elements you want to equalise
				$('.case-std-content', this).each(function(){

					// If this box is higher than the cached highest then store it
					if($(this).height() > highestBox) {
						highestBox = $(this).height(); 
					}
				});  

				// Set the height of all those children to whichever was highest 
				$('.case-std-content').height(highestBox);
			}); 
		});
	 this.handleLoad();
	}
	
	
	handleLoad() {
		var calHeight = $('.case-std-img').height();
		$('.cmn-std-width').css({'height' : calHeight, 'width': '100%'});
	 }
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
					<div className="common-pad">
						<div className="case-study-section  common-pad">
							<div className="container case-study">
								<div className="case-stories">
									<div className="story-grid" data-aos="fade-up">
										<img src={CaseImage1} alt="case-img" className='cmn-std-width' />
										<div className="story-txt">
											<h5>knowledge base</h5>
											<h2>Success Stories</h2>
											<p>We work together across the globe to make a world of difference.</p>
										</div>
										<div className="case-journey">
											<a href="#">Start your journey <span><img src={Uparrow} alt='up-arrow'/></span></a>
										</div>
									</div>
								</div>
								<div className="case-study-slider">
								<Slider ref={c => (this.slider = c)} {...settings}>
										{ sliderElements.map((element) => (										
										<div className="slider">
											<div className="slider__item case-std-img" data-aos="fade-up">
												<img src={element.src} alt="product-first"/>
													<a href='#' className='case-sty-txt'>{element.customTxt}</a>
												<div className="case-std-content">
													<h5>{element.title}</h5>
													<h2>{element.head}</h2>
													<p>{element.para}</p>
												</div>
											</div>
										</div>
										))}
									</Slider>
									<div className="slider-control-btn">
									<button className="slider-count-btn">
										{" "}
											{this.state.currentSlide + 2} / {sliderElements.length}
										{" "}
									</button>
									<button className="button back-btn" onClick={this.previous}>
										<img src= {Previous} alt= "Previous-btn"/>
									</button>
									<button className="button back-btn" onClick={this.next}>
										<img src= {Next} alt= "Next-btn"/>
									</button>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</>
			)
    }
}
