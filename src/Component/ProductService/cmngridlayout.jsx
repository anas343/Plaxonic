import React, { Component } from 'react'


export default class cmngridlayout extends Component {
	render() {
		return (
			<>
				<div className= {this.props.container == true ? 'container common-container-wdt common_app_boxes' : 'common_app_boxes'}>
					{ this.props.AppDevelopment.map((element) => ( 
						<div className='app_box-1' style= {this.props.background == true ? {backgroundColor : '#2A333A'} : {border: '1px solid #2A333A'}}>
							<div className='box-aap-content' data-aos="fade-up">
								<img src= {element.image} alt=''/>
								<h3 style={{color: this.props.headclr}} >{element.title}</h3>
								<p  style={{color: this.props.paraclr}} >{element.desc}</p>
							</div>
						</div>
					))}
				</div>
			</>
		)
	}
}
