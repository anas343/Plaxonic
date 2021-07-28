import React from 'react';
import Brand from '../assests/logo.svg'
import "bootstrap/dist/js/bootstrap.min.js";
import '../layout/header.css';
import '../layout/header_footer.css';
import '../layout/font-family/libra_franklin.css';
import arrow from '../assests/arrow_right.png'
import { Button, Form, NavDropdown, FormControl, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
			<nav className="container common-container-wdt navbar navbar-expand-lg">
				<Link className="navbar-brand" to="/"><img src={Brand} alt="brand-image"  /></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link header_list" to="/service">Services</Link>
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
					<div className="get_in_touch">
						<Link to="#">Get in touch<span><img src={arrow} alt="up-arrow"/></span></Link>
					</div>
				</div>
			</nav>		
    )
}
