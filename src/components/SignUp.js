import React from 'react';
import styled from 'styled-components';
import img from '../img';
import SignUpField from './SignUpField';
import SignUpSelect from './SignUpSelect';
import SignUpTerms from './SignUpTerms';
import Button from './Button';
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
				<form>
					<SignUpField type="text" placeholder="Name"></SignUpField>
					<SignUpField type="text" placeholder="Last Name"></SignUpField>
					<SignUpField type="email" placeholder="Email"></SignUpField>
					<SignUpSelect></SignUpSelect>
					<Button text={'Submit'}></Button>
				</form>
			</div>
			<div className="signUpBackground"></div>
		</Container>
	);
}
