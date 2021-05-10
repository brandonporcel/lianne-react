import React from 'react';
import styled from 'styled-components';
import img from '../img';
import SignUpField from './SignUpField';
const Container = styled.div`
	border: 1px solid;

	margin-top: 80px;
	.signUpSection {
		background-image: url(${img.noiseBG});
		/* height: 900px; */
		width: 50%;
		margin: 0 40% 0 auto;
		max-width: 670px;
		padding: 5.5% 10.5%;
	}
	.signUpBackground {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		width: 50%;
		z-index: -10;
		background-image: url(${img.signUpBG});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center top;
	}
`;
export default function SignUp() {
	return (
		<Container>
			<div className="signUpSection">
				{/* hacer con mail libreria jonmircha */}
				<form>
					<SignUpField type="text" placeholder="Name"></SignUpField>
					<SignUpField type="text" placeholder="Last Name"></SignUpField>
					<SignUpField type="email" placeholder="Email"></SignUpField>
					<div className="field-ctn">
						<select>
							<option value>Select A country</option>
							<option value="argentina">argentina</option>
							<option value="maradoniano">maradoniano</option>
						</select>
					</div>
					<div class="birthday fieldWrap">
						<label for="birthDate">Date of Birth</label>
						<div class="dobMonthAndDay">
							<div class="dobMonth">
								<select name="dobMonth" id="dobMonth">
									<option value="">Month</option>
									<option value="1">January</option>
									<option value="6">June</option>
									<option value="12">December</option>
								</select>
							</div>
							<div class="dobDay">
								<select>
									<option value="">Day</option>
									<option value="1">1</option>
									<option value="15">15</option>
									<option value="31">31</option>
								</select>
							</div>
						</div>
					</div>
					<div className="buttonComponent">sas</div>
				</form>
			</div>
			<div className="signUpBackground"></div>
		</Container>
	);
}
