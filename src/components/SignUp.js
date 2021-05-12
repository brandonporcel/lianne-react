import React from 'react';
import styled from 'styled-components';
import img from '../img';
import SignUpField from './SignUpField';
import SignUpSelect from './SignUpSelect';

import Button from './Button';
const Container = styled.div`
	margin-top: 80px;
	.signUpSection {
		background-image: url(${img.noiseBG});
		height: auto;
		margin: 0 40% 0 auto;
		width: 50%;
		width: 670px;
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
	.terms {
		font-size: 12px;
		padding: 10px 0;
		text-align: center;
		a:hover {
			color: var(--secondary-color);
		}
	}
	@media screen and (max-width: 1024px) {
		.signUpSection {
			width: 90%;
			margin: 0 auto;
			margin-top: 40%;
			padding: 40px;
		}
		.signUpBackground {
			width: 100%;
			height: 100%;
		}
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
					<div className="terms">
						<a
							href="http://wminewmedia.com/privacy/"
							target="_blank"
							rel="noreferrer"
							title="Terms"
						>
							Terms
						</a>
					</div>
				</form>
			</div>
			<div className="signUpBackground"></div>
		</Container>
	);
}
