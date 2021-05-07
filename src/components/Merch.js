import React from 'react';
import styled from 'styled-components';
import img from '../img';
const Container = styled.div`
	height: 430px;
	border: 1px solid red;
	margin: 150px 0 0;
	width: 100%;
	border: 1px solid green;
	display: flex;
	align-items: flex-end;

	.merchContents {
		display: flex;
		overflow: auto hidden;
		padding-left: 700px;
	}
	.merchContent {
		margin-right: 50px;
	}
	.merchImage {
		height: 380px;
		width: 380px;
	}

	.background {
		position: fixed;
		z-index: -10;
		background-image: url(${img.merchBG});
		background-repeat: no-repeat;
		background-position: center top;
		background-size: 35% auto;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
	}
`;

export default function Merch() {
	return (
		<Container>
			<ul className="merchContents">
				<li className="merchContent">
					<div className="merchImage">
						<img src={img.vinyl} alt="" />
					</div>
					<div className="merchCTA">
						<a href="/">
							<span></span>
							<span></span>
						</a>
					</div>
				</li>
				<li className="merchContent">
					<div className="merchImage">
						<img src={img.sleeveVinyl} alt="" />
					</div>
					<div className="merchCTA">
						<a href="/">
							<span></span>
							<span></span>
						</a>
					</div>
				</li>
				<li className="merchContent">
					<div className="merchImage">
						<img src={img.sleeve} alt="" />
					</div>
					<div className="merchCTA">
						<a href="/">
							<span></span>
							<span></span>
						</a>
					</div>
				</li>
				<li className="merchContent">
					<div className="merchImage">
						<img src={img.sleeve} alt="" />
					</div>
					<div className="merchCTA">
						<a href="/">
							<span></span>
							<span></span>
						</a>
					</div>
				</li>
			</ul>

			<div className="background"></div>
		</Container>
	);
}
