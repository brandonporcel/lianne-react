import React from 'react';
import styled from 'styled-components';
import VideoSlider from './VideoSlider';
const VideoSection = styled.section`
	padding-top: 81px;
	.main-video {
		text-align: center;
		margin: 0 auto 50px;
		width: 1040px;
	}
	.main-video img {
		width: 80.4%;
	}
`;
export default function Videos() {
	return (
		<>
			<VideoSection>
				<div className="main-video">
					<img
						src="https://www.liannelahavas.com/graphics/CantFightThumbnail.jpg"
						alt=""
					/>
					<div className="playIcon"></div>
					<div className="video-title"></div>
				</div>
				<VideoSlider></VideoSlider>
			</VideoSection>
		</>
	);
}
