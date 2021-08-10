import React, { Component } from 'react'
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';


const backgroundColor = 'linear-gradient(89.45deg, #1DA4DE 0.35%, #3EB9ED 62.88%);' 

export default class numbercounter extends Component {
	render() {
		return (
			<>
				<div className="project-succ" style={this.props.background == true ? {background: 'linear-gradient(89.45deg, #1DA4DE 0.35%, #3EB9ED 62.88%)'} : {}}>
					<div className="container common-container-wdt delivered-services" data-aos="fade-up"> 
						{ this.props.content ? <> <h2 style= {{color: this.props.headclr}}>Numbers that matter</h2>
							<p>Feugiat fermentum eget suscipit sollicitudin molestie es posuere maecenas facili sis elit integer.</p></>
							: ""
						}
						<div className="project-count">
							<div className="project-services">
								<h2 style= {{color: this.props.headclr}} ><CountUp  end={200} delay={4} duration={10}/></h2>
								<h5 style= {{color: this.props.paraclr}} >Team</h5>
							</div>
							<div className="project-services">
								<h3 style= {{color: this.props.headclr}} >06</h3>
								<h5 style= {{color: this.props.paraclr}} >Offices</h5>
							</div>
							<div className="project-services">
								<h2 style= {{color: this.props.headclr}} ><CountUp end={35} delay={4} duration={10}/></h2>
								<h5 style= {{color: this.props.paraclr}} >Nations Served</h5>
							</div>
							<div className="project-services">
								<h2 style= {{color: this.props.headclr}} ><CountUp end={3500}  delay={4} duration={10}/></h2>
								<h5 style= {{color: this.props.paraclr}} >Projects Delivered</h5>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
