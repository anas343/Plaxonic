import React, { Component } from 'react'
import talk1 from '../../assests/tk1.png'
import talk2 from '../../assests/tk2.png'
import talk3 from '../../assests/tk3.png'
import arrowup from '../../assests/arrow_right.png'

const gridValue = [
	{
		textNumber: '01',
		desc: 'Small acts can tranform the world',
		btnText: 'Corporate Responsibility',
		src: arrowup
	},
	{
		textNumber: '02',
		desc: 'Whatever it takes to encourage our people',
		btnText: 'Culture',
		src: arrowup
	},
	{
		textNumber: '03',
		desc: 'Recognized as a great place to work',
		btnText: 'Corporate Responsibility',
		src: arrowup
	},
	{
		textNumber: '04',
		desc: 'Recognized as a great place to work ',
		btnText: 'Awards & Recoginization',
		src: arrowup
	}

]

export default class expert extends Component {
	render() {
		return (
			<>
				<div className='container common-container-wdt common-pad'>
					<div className='plaxonic-diff-sec'>
						<h2>The Plaxonic difference</h2>
						<p>Our experts bring deep industry and functional expertise and a range of perspectives that question the status quo and spark change. We work in a uniquely collaborative model across the firm and throughout all levels of the client organization, fueled by the goal of helping our clients thrive and enabling them to make the world a better place.</p>
					</div>
					<div className='grid-diff'>
						<div className='cmn-wdth'>
							<img src={talk1} />
						</div>
						<div className='cmn-wdth2'>
							<img src={talk2} />
						</div>
						<div className='cmn-wdth3'>
							<img src={talk3} />
						</div>
					</div>
					<div className='grid-mre-section'>
						<h2>Know more about the company</h2>
						<div className= 'bx-grd'>
							{ gridValue.map((element) => (  
								<div className='bx-1'>
									<h2>{element.textNumber}</h2>
									<p>{element.desc}</p>
									<a href='#'>{element.btnText}<span><img src={element.src} /></span></a>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}
}
