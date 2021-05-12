import React from 'react';
import styled from 'styled-components';
import img from '../img';
import MerchContent from './MerchContent';
const Container = styled.div`
	height: 430px;
	width: 100%;
	display: flex;
	align-items: flex-end;

	.merchContents {
		display: flex;
		overflow: auto hidden;
		padding-left: 700px;
		&::-webkit-scrollbar {
			height: 7px;
		}
		&::-webkit-scrollbar-thumb {
			height: 7px;
			background-color: rgb(255, 255, 255, 0.75);
			border-radius: 10px;
		}
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
	@media screen and (max-width: 1024px) {
		height: auto;
		justify-content: center;
		margin-top: 40%;

		.merchContents {
			flex-direction: column;
			padding-left: 0;
			width: 90%;
			align-items: center;
		}
		.background {
			background-size: cover;
			background-position: center;
		}
	}
`;
const d = document;
const wheelScroll = (e) => {
	const isBrowser = {
		chrome: () => navigator.userAgent.match(/chrome/i),
		safarai: () => navigator.userAgent.match(/safarai/i),
		firefox: () => navigator.userAgent.match(/firefox/i),
		opera: () => navigator.userAgent.match(/opera|opera mini/i),
		ie: () => navigator.userAgent.match(/msie|iemobile/i),
		edge: () => navigator.userAgent.match(/edge/i),
		any: function () {
			return (
				this.ie() ||
				this.edge() ||
				this.chrome() ||
				this.safarai() ||
				this.firefox() ||
				this.opera()
			);
		},
	};
	let scroolSpeed = 1;
	if (isBrowser.firefox()) {
		scroolSpeed = 30;
	}
	if (isBrowser.chrome()) {
		scroolSpeed = 1.1;
	}
	d.querySelector('.merchContents').scrollLeft += -e.deltaY * scroolSpeed;
};
export default function Merch() {
	d.addEventListener('DOMContentLoaded', () => {
		d.querySelector('.merchContents').addEventListener('wheel', wheelScroll);
	});
	return (
		<Container>
			<ul className="merchContents">
				{/* {Object.values(img.merch).map((value, index) => (
					<MerchContent key={index} img={value}></MerchContent>
				))} */}

				<MerchContent img={img.vinyl}></MerchContent>
				<MerchContent img={img.sleeveVinyl}></MerchContent>
				<MerchContent img={img.sleeve}></MerchContent>
				<MerchContent img={img.tShirtVinyl}></MerchContent>
				<MerchContent img={img.tShirt}></MerchContent>
			</ul>
			<div className="background"></div>
		</Container>
	);
}
