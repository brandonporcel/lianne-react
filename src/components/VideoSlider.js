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
		height: 7px;
		background-color: rgb(255, 255, 255, 1);
		border-radius: 10px;
	}
`;

export default function VideoSlider() {
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
