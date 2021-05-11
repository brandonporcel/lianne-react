import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../img';
import SocialIcon from './SocialIcon';
import Media from 'react-media';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
const MobilePanel = styled.div`
	.mobileHeaderrr {
		position: relative;
		z-index: 100;
		margin-bottom: 20px;
		.page-title {
			font-size: 30px;
			position: absolute;
			width: 100%;
			text-align: center;
		}
		.hamburger-react {
			position: absolute;
		}
	}
	.mobile-panel {
		/* background-color: var(--secondary-color); */
		background-color: #9b7baa;
		z-index: 50;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: transform 0.5s ease;
		transform: translate(0, -100%);
		&.active {
			transform: translate(0, 0);
		}
		.mobileLogo {
			padding: 60px 0 20px;
			width: 68.2%;
			max-width: 282px;
			margin: 0 auto;
		}
	}

	div {
		text-align: center;
		a {
			padding: 20px 0;
			display: block;
			font-style: normal;
		}
	}
`;
export default function MobileHeader() {
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		const d = document;
		d.addEventListener('click', (e) => {
			if (e.target.matches('.links-ctn') || e.target.matches('.links-ctn *')) {
				d.querySelector('.mobile-panel').classList.remove('active');
				setOpen(false);
			}
		});

		if (isOpen) {
			d.querySelector('.mobile-panel').classList.add('active');
		} else {
			d.querySelector('.mobile-panel').classList.remove('active');
		}
	}, [isOpen]);
	return (
		<MobilePanel>
			<div className="mobile-panel">
				<nav>
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
					<SocialIcon></SocialIcon>
				</nav>
			</div>
			<Media query={`(max-width: 1024px)`}>
				{(matches) =>
					matches ? (
						<div className="mobileHeaderrr">
							<div className="page-title">Videos</div>
							<Hamburger toggled={isOpen} toggle={setOpen} />
						</div>
					) : (
						<></>
					)
				}
			</Media>
		</MobilePanel>
	);
}
