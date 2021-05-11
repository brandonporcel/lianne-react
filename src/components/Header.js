import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from 'hamburger-react';

import { Link } from 'react-router-dom';
const Ctn = styled.div`
	.mobile {
		display: none;
	}
	@media screen and (max-width: 1024px) {
		.mobile {
			display: block;
			height: 30px;
			width: 30px;
			background: blue;
		}
	}
`;
const HeaderTag = styled.header`
	position: sticky;
	top: 0;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 30px 0;
	background-color: rgba(0, 0, 0, 0.8);
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;
const MenuLinks = styled.nav`
	a {
		font-size: 21px;
		font-weight: 400;
		text-transform: uppercase;
		margin: 0 25px;
		letter-spacing: 2px;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: #b9a2c3;
		}
	}
`;

export default function Header() {
	return (
		<>
			<Ctn>
				<HeaderTag className="headerrr">
					<MenuLinks>
						<Link to="/">HOME</Link>
						<Link to="/videos">videos</Link>
						<Link to="/tour">tour</Link>
						<Link to="/merch">merch</Link>
						<Link to="/signup">sign up</Link>
					</MenuLinks>
				</HeaderTag>
				<div className="mobile">
					<FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon>
				</div>
			</Ctn>
		</>
	);
}
