import React, { useEffect } from 'react';
import styled from 'styled-components';
import VideoSlider from './VideoSlider';
const VideoSection = styled.section`
	padding-top: 80px;
	width: 80%;
	margin: 0 auto;
	.main-video {
		text-align: center;
		margin: 0 auto 50px;
		width: 1040px;
		position: relative;
		img {
			width: 80.4%;
		}
		.video-title.show {
			transition: all 0.5s ease-in-out;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.75);
		}
		.video-title {
			opacity: 0;
			display: none;
		}
	}
	@media screen and (max-width: 1024px) {
		padding-top: 0;
		& .main-video {
			width: 100%;
			& img {
				width: 100%;
			}
		}
	}
`;
export default function Videos() {
	useEffect(() => {
		const d = document;
		d.addEventListener('mouseover', (e) => {
			if (
				e.target.matches('.main-video') ||
				e.target.matches('.CantFightTnail')
			) {
				d.querySelector('.video-title').classList.add('show');
			}
		});

		d.querySelector('.main-video').addEventListener('mouseleave', (e) => {
			d.querySelector('.video-title').classList.remove('show');
		});
	}, []);
	return (
		<>
			<VideoSection>
				<div className="main-video">
					<div className="video-title">
						<span>Can't Fight (Official Music Video)</span>
					</div>
					<img
						src="https://www.liannelahavas.com/graphics/CantFightThumbnail.jpg"
						alt="Lianne La Havas"
						className="CantFightTnail"
					/>
				</div>
				<VideoSlider></VideoSlider>
			</VideoSection>
		</>
	);
}
