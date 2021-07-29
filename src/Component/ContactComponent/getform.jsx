import React, { Component } from 'react'
import arrow from '../../assests/arrow_right.png'
import { Link } from "react-router-dom";

export default class getform extends Component {
	render() {
		return (
			<>
				<div className='connection-form common-pad'>
					<div className='container common-container-wdt'>
						<div className='get-content-txt' data-aos="fade-up">
							<h2>Keep in touch</h2>
							<p>Please complete the form below so we can direct your inquiry to the right team. You can view our office locations here.</p>
						</div>
						<div className='get-form-touch' data-aos="fade-up">
							<form id='form1'>
								<div className='frm-input-grid'>
									<div className='comm-input-fld'>
										<label>Full name*</label><br/>
										<input type='text' />
									</div>
									<div className='comm-input-fld'>
										<label>Work email*</label><br/>
										<input type='text' />
									</div>
									<div className='comm-input-fld'>
										<label>Phone number</label><br/>
										<input type='text' />
									</div>
									<div className='comm-input-fld'>
										<label>Website URL</label><br/>
										<input type='text' />
									</div>
									<div className='comm-input-fld slt-box-content'>
										<label>Select country of residence*</label><br/>
										<select class="form-control" name="select1" id="select1">
											<option value="1">India</option>
											<option value="2">USA</option>
											<option value="3">Dubai</option>
											<option value="4">Hong kong</option>
										</select>
									</div>
									<div className='comm-input-fld slt-box-content'>
										<label>Select industry*</label><br/>
										<select class="form-control" name="select1" id="select1">
											<option value="1">Designing</option>
											<option value="2">IT</option>
											<option value="3">Devloper</option>
										</select>
									</div>
									<div className='form-txtara-fld'>
										<label>How can we help you? *</label><br/>
										<textarea  rows="5" cols="50"></textarea>
									</div>
									<div className='inpt-checkbox'>
									<input type="checkbox" id="Connect" name="Connect" value="person"/>
  								<label for="Connect"> <p>I understand and agree that the information submitted in this form will be transmitted to, stored and processed by Plaxonic, in accordance with their  <Link to='#'>Privacy Policy</Link></p></label>
									</div>
								</div>
								<div className='submit-query-btn'>
							  	<button type="submit" form="form1" value="Submit">Submit<img src={arrow} alt=''/></button>
								</div>
							</form>
						</div>
					</div>
				</div>	
			</>
		)
	}
}
