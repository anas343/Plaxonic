import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';
import Next from '../../assests/next.svg'
import Previous from '../../assests/previous.svg'
import Product1 from '../../assests/Product1.jpg'
import Product2 from '../../assests/Product2.jpg'
import Product3 from '../../assests/Product3.png'
import Product4 from '../../assests/Product4.jpg'


const sliderElements = [
		{
			src:  Product1,
			title: 'PlaxoLIMS',
			desc: 'Real-time Water Data Monitoring & Analysis'
		},

		{
			src: Product2,
			title: 'PlaxoSD',
			desc: 'Artificial Intelligence meets Industry 4.0'
		},

		{
			src: Product3,
			title: 'iKnock',
			desc: 'Visitor Management System for Smart Generation'
		},

		{
			src: Product4,
			title: 'Fortune',
			desc: 'The smart online food ordering app & platform'
		}
]

export default class product extends Component {

	componentDidMount() {
		// Set Image height on homepage //
    $(document).ready(function(){

			// Select and loop the container element of the elements you want to equalise
			$('.product-slider').each(function(){  

				// Cache the highest
				var highestBox = 0;

				// Select and loop the elements you want to equalise
				$('.content-desc', this).each(function(){

					// If this box is higher than the cached highest then store it
					if($(this).height() > highestBox) {
						highestBox = $(this).height() + 20; 
					}

				});  

				// Set the height of all those children to whichever was highest 
				$('.content-desc',this).height(highestBox);

			}); 
		});
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
						<div className="product_details-section  common-pad">
							<div className="container product_desc-detail" data-aos="fade-up">
								<div className="product-content">
									<h5>the plaxonic difference</h5>
									<h2>Explore our Products</h2>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
								</div>
								<div className="product-slider">
									<Slider ref={c => (this.slider = c)} {...settings}>
										{ sliderElements.map((element) => (										
										<div className="slider">
											<div className="slider__item">
												<img src={element.src} alt="product-first"/>
												<div className="content-desc">
													<span>{element.title}</span>
													<p>{element.desc}</p>
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
							{/* <Product Slider end> */}
						</div>
					</>
        )
    }
}
