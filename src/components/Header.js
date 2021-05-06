import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderTag = styled.header`
	position: sticky;
	top: 0;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 30px 0;
	background-color: rgba(0, 0, 0, 0.8);
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
			<HeaderTag>
				<MenuLinks>
					<Link to="/">HOME</Link>
					<Link to="/videos">videos</Link>
					<Link to="/tour">tour</Link>
					<Link to="/merch">merch</Link>
					<Link to="/signup">sign up</Link>
				</MenuLinks>
			</HeaderTag>
		</>
	);
}
