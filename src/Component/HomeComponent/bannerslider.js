import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Play from '../../assests/play.png';					
import React, { Component } from 'react'


export default class bannerslider extends Component {
	
	render() {
		const settings = {
			dots: false,
			draggable: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
			fade: true,
			arrow:false,
      autoplaySpeed: 7000,
      cssEase: "linear",
			adaptiveHeight: false
		};
		
		return (
			<>
				<div className="banner-slider-sec">
					<Slider {...settings}>
						<div className="stock_sec_image">
							<div className="container common-container-wdt stck-cont-pst">
								<div className="stock_txt-content slide-content">
									<span>01</span>
									<h2>Driven to make experiences that cut through the noise</h2>
									<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer. Cras habitant quisque pellentesque pellentesque aliquam.</p>
									<div className="stock-video-description">
										<span><img src={Play} className="play-btn"  alt="play-btn"/></span><p>Featured Insighs</p> 
									</div>
								</div>
							</div>
						</div>
						<div className="stock_sec_image2">
							<div className="container common-container-wdt stck-cont-pst slide-content">
								<div className="stock_txt-content">
									<span>02</span>
									<h2>Driven to make experiences that cut through the noise</h2>
									<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer. Cras habitant quisque pellentesque pellentesque aliquam.</p>
									<div className="stock-video-description">
										<span><img src={Play} className="play-btn"  alt="play-btn"/></span><p>Featured Insighs</p> 
									</div>
								</div>
							</div>
						</div>
						<div className="stock_sec_image3">
							<div className="container common-container-wdt stck-cont-pst slide-content">
								<div className="stock_txt-content">
									<span>03</span>
									<h2>Driven to make experiences that cut through the noise</h2>
									<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer. Cras habitant quisque pellentesque pellentesque aliquam.</p>
									<div className="stock-video-description">
										<span><img src={Play} className="play-btn"  alt="play-btn"/></span><p>Featured Insighs</p> 
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</>
		)
	}
}
