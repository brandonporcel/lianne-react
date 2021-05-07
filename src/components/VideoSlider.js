import React from 'react';
import img from '../img';
import VideoContent from './videoContent';
import styled from 'styled-components';
const VideoSliderCtn = styled.div`
	margin: 0 auto;
	width: 1040px;
	display: flex;
	overflow: auto;

	&::-webkit-scrollbar {
		height: 7px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgb(255, 255, 255, 1);
		border-radius: 10px;
	}
`;
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

	document.querySelector('.videoSliderCtn').scrollLeft +=
		-e.deltaY * scroolSpeed;
};
export default function VideoSlider() {
	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('.videoSliderCtn').addEventListener('wheel', () => {
			wheelScroll();
			// document.querySelector('body').style.overflowY = 'hidden';
		});
	});
	return (
		<VideoSliderCtn className="videoSliderCtn">
			<VideoContent img={img.paperTnail}></VideoContent>
			<VideoContent img={img.bittersweetTnail}></VideoContent>
			<VideoContent img={img.fishesTnail}></VideoContent>
			<VideoContent img={img.fishesTnail}></VideoContent>
			<VideoContent img={img.fishesTnail}></VideoContent>
		</VideoSliderCtn>
	);
}
