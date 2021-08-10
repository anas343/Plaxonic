import { element } from 'prop-types';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { $ }  from 'react-jquery-plugin';
import { findDOMNode } from 'react-dom';

const headItemfisrt = 'Engineering'
const headItemSec = 'DevOps'
const headItemthird ='Emerging Technologies'
const headItemfourth = 'Quality Engineering'
const headItemfifth = 'Staffing Augmentation'
const headlast = 'Digital Transformation'


const ServiceHead = [
	{
		head: 'Engineering'
	},

	{
		head: 'DevOps'
	}

]
const ServiceItem = [
	{
		linkText: 'Web Apps Development',
		hrefLink: '/service'
	},
	{
		linkText: 'Mobile Apps Development',
		hrefLink: '/service'
	},
	{
		linkText: 'Application Modernisation',
		hrefLink: '/service'
	},
	{
		linkText: 'Cloud Services',
		hrefLink: '/cloudservice'
	}

]

const ServiceItemApp = [
	{
		linkText: 'DevOps Consulting',
		hrefLink: '/service'
	},
	{
		linkText: 'Managed Services',
		hrefLink: '/managedservice'
	},
	{
		linkText: 'Migration Services',
		hrefLink: '/migrationservice'
	},
	{
		linkText: 'Kubernetes & Orchestration',
		hrefLink: '/service'
	}
]

const ServiceItemTech = [
	{
		linkText: 'Automation & AI',
		hrefLink: '/automation'
	},
	{
		linkText: 'Blockchain Development',
		hrefLink: '/service'
	},
	{
		linkText: 'Data Sciences',
		hrefLink: '/datascience'
	},
	{
		linkText: 'Internet Of Things',
		hrefLink: '/service'
	}
]

const ServiceItemQuality = [
	{
		linkText: 'Quality Assurance',
		hrefLink: '/service'
	},
	{
		linkText: 'Load & Performance Testing',
		hrefLink: '/service'
	},
	{
		linkText: 'Security Risk Assessment',
		hrefLink: '/service'
	}
]

const ServiceItemStaff = [
	{
		linkText: 'Contract Hire',
		hrefLink: '/service'
	},
	{
		linkText: 'Tellus eleifend non magna',
		hrefLink: '/service'
	},
	{
		linkText: 'Hendrerit varius',

	},
	{
		linkText: 'Design Consulting',
		hrefLink: '/service'
	}
]

const ServiceItemDigital = [
	{
		linkText: 'Search Engine Marketing',
		hrefLink: '/service'
	},
	{
		linkText: 'Social Media Management',
		hrefLink: '/service'
	},
	{
		linkText: 'Paid Advertising',
		hrefLink: '/service'
	},
	{
		linkText: 'Marketing Automation',
		hrefLink: '/marketingautomation'
	},
	{
		linkText: 'Email Marketing',
		hrefLink: '/service'
	}
]


export default class megaServiceItem extends Component {

	componentDidMount() {
		$(document).ready(function() {
			$('.hideDropdwn').click(function() {
				$('.dropdown-menu').addClass('hideDrpMenu')
				$('.dropdown-menu').removeClass('slwanimation')
			});
		});
	}
	
	render() {
		return (
			<>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<div className="container common-container-wdt">
						<div className="service-fl-box">
							<div className="service-box bottom-padd">
								<div className='prd-services-content'>
									<h4>{headItemfisrt}</h4>
									<ul>
									{ ServiceItem.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn'>{element.linkText} </Link></li>
									})}
									</ul>
								</div>
							</div>
							<div className="service-box bottom-padd">
								<div className='prd-services-content'>
									<h4>{headItemSec}</h4>
									<ul>
									{ ServiceItemApp.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn' >{element.linkText}</Link></li>
									})}
									</ul>
								</div>
							</div>
							<div className="service-box bottom-padd">
								<div className='prd-services-content'>
									<h4>{headItemthird}</h4>
									<ul>
									{ ServiceItemTech.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn'>{element.linkText}</Link></li>
									})}
									</ul>
								</div>
							</div>
							<div className="service-box bottom-padd">
								<div className='prd-services-content'>
									<h4>{headItemfourth}</h4>
									<ul>
									{ ServiceItemQuality.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn'>{element.linkText}</Link></li>
									})}
									</ul>
								</div>
							</div>
							<div className="service-box">
								<div className='prd-services-content'>
									<h4>{headItemfifth}</h4>
									<ul>
									{ ServiceItemStaff.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn' >{element.linkText}</Link></li>
									})}
									</ul>
								</div>
							</div>
							<div className="service-box">
								<div className='prd-services-content'>
									<h4>{headlast}</h4>
									<ul>
									{ ServiceItemDigital.map((element) => {
										return <li><Link to={element.hrefLink} className='hideDropdwn' >{element.linkText}</Link></li>
									})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
