import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../img';
import Media from 'react-media';
import { Spin as Hamburger } from 'hamburger-react';

import { Link } from 'react-router-dom';
const Ctn = styled.div`
	.mobile-panel {
		background-color: var(--secondary-color);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: transform 0.5s ease;
		transform: translate(0, -100%);
	}
	.mobile-panel.active {
		transform: translate(0, 0);
	}
	.mobileLogo {
		padding: 60px 0 20px;
		width: 68.2%;
		max-width: 282px;
		margin: 0 auto;
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
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.querySelector('.mobile-panel').classList.add('active');
		} else {
			document.querySelector('.mobile-panel').classList.remove('active');
		}
	}, [isOpen]);
	return (
		<>
			<Ctn>
				<HeaderTag>
					<MenuLinks>
						<Link to="/">HOME</Link>
						<Link to="/videos">videos</Link>
						<Link to="/tour">tour</Link>
						<Link to="/merch">merch</Link>
						<Link to="/signup">sign up</Link>
					</MenuLinks>
				</HeaderTag>
				<div className="mobile-panel">
					<nav className="">
						<div className="mobileLogo">
							<img src={img.whiteLogo} alt="" />
						</div>
						<ul></ul>
					</nav>
				</div>
				<Media query={`(max-width: 1024px)`}>
					{(matches) =>
						matches ? (
							<Hamburger toggled={isOpen} toggle={setOpen} />
						) : (
							<div></div>
						)
					}
				</Media>
				{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
			</Ctn>
		</>
	);
}
