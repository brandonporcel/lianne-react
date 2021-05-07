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
const d = document;
const wheelScroll = (e) => {
	const sliderCtn = d.querySelector('.videoSliderCtn');
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
	let scrollSpeed = 1;
	if (isBrowser.firefox()) {
		scrollSpeed = 30;
	}
	if (isBrowser.edge() || isBrowser.chrome) {
		scrollSpeed = 1.5;
	}

	sliderCtn.scrollLeft += -e.deltaY * scrollSpeed;
};
export default function VideoSlider() {
	d.addEventListener('DOMContentLoaded', () => {
		d.addEventListener('click', (e) => {
			if (
				e.target.matches('.videoSliderCtn') ||
				e.target.matches('.videoSliderCtn div')
			) {
				d.addEventListener('wheel', (e) => {
					if (e.target.matches('.videoSliderCtn')) {
						wheelScroll(e);
					}
				});
			}
		});
		// d.addEventListener('scroll', () => {
		// 	d.querySelector('body').classList.add('noScroll');
		// });
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
