import React, { Component } from 'react'
import Brand from '../assests/logo.svg'
import "bootstrap/dist/js/bootstrap.min.js";
import '../layout/header.css';
import '../layout/header_footer.css';
import '../layout/font-family/libra_franklin.css';
import arrow from '../assests/arrow_right.png'
import { Button, Form, NavDropdown, FormControl, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceMenu from '../layout/servicesMenu'
import MegaServiceItem from './megaServiceItem'
import { Next } from 'react-bootstrap/esm/PageItem';
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';


export default class Header extends Component {

	componentDidMount() {
		$(document).ready(function() {
			$('.header_list').click(function() {
				$(this).next().removeClass('hideDrpMenu')
				var checkCls = $(this).next().hasClass('slwanimation')
				if (checkCls) {
					$(this).next().first().stop(true, true).slideUp()
					$(this).next().removeClass('slwanimation');
				}
				else {
					$(this).next().first().stop(true, true).slideDown(500)
					$(this).next().addClass('slwanimation');
				}
			});
			$('.hide-drop-menu').click(function() {
				$('.dropdown-menu').addClass('hideDrpMenu')
				$('.dropdown-menu').removeClass('slwanimation')
			})
		});
	}
	
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg">
					<div className='container common-container-wdt'>
						<Link className="navbar-brand hide-drop-menu" to="/"><img src={Brand} alt="brand-image" /></Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbar">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item dropdown megamenu-li">
								<Link className="nav-link dropdown-toggle header_list" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Services
								</Link>
								<MegaServiceItem/>
							</li>
							<li className="nav-item">
								<Link className="nav-link header_list" to="#">Products</Link>
							</li>
							<li className="nav-item">
									<Link className="nav-link header_list" to="/about">About</Link>
							</li>
							<li className="nav-item">
									<Link className="nav-link header_list" to="#">Resources</Link>
							</li>
							<li className="nav-item">
									<Link className="nav-link header_list" to="#">Careers</Link>
							</li>
						</ul>
						<div className='get_in_touch'>
							<Link to='/getInTouch'>Get in touch<span><img src= {arrow}/></span>
							</Link>
						</div>
					</div>
					</div>
				</nav>
			</>
		)
	}
}
