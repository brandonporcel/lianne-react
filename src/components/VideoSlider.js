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
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		width: 100%;
		& div {
			width: 100%;
			& .video-thumbanail {
				margin-bottom: 20px;
				border: none;
			}
		}
	}
`;

export default function VideoSlider() {
	return (
		<VideoSliderCtn className="videoSliderCtn">
			<VideoContent title="Weird Fishes" img={img.fishesTnail}></VideoContent>
			<VideoContent
				title="BitterSweet"
				img={img.bittersweetTnail}
			></VideoContent>
			<VideoContent title="Paper Thin" img={img.paperTnail}></VideoContent>
		</VideoSliderCtn>
	);
}
