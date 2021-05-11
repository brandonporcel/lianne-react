import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../img';
import Media from 'react-media';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
const Ctn = styled.div`
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
export default function MobileHeader() {
	return (
		<>
			<div className="mobile-panel">
				<nav className="">
					<div className="mobileLogo">
						<img src={img.whiteLogo} alt="" />
					</div>
					<div className="links-ctn">
						<Link to="/">HOME</Link>
						<Link to="/videos">videos</Link>
						<Link to="/tour">tour</Link>
						<Link to="/merch">merch</Link>
						<Link to="/signup">sign up</Link>
					</div>
				</nav>
			</div>
			<Media query={`(max-width: 1024px)`}>
				{(matches) =>
					matches ? <Hamburger toggled={isOpen} toggle={setOpen} /> : <></>
				}
			</Media>
		</>
	);
}
