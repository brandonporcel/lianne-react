import React, { useEffect } from 'react';
import img from '../img';
import Footer from './Footer';
import styled from 'styled-components';
const VideoSection = styled.section`
	padding-top: 81px;
	.main-video {
		border: 1px solid red;
		text-align: center;
		margin: 0 auto 50px;
		width: 1040px;
	}
	.main-video img {
		width: 80.4%;
	}
	.video-slider {
		margin: 0 auto;
		width: 1040px;
		border: 1px solid green;
		display: flex;
		overflow: auto;
	}
	.video-content {
		margin-right: 50px;
		width: 375px;
	}
	.video-thumbanail {
		width: inherit;
		margin-bottom: 50px;
		border: 1px solid var(--white);
	}
`;
export default function Videos() {
	useEffect(() => {
		document.querySelector('title').textContent = 'Lianne La Havas . Videos';
	}, []);
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
				<div className="video-slider">
					<div className="video-content">
						<div className="video-thumbanail">
							<img src={img.paperTnail} alt="" />
							<div className="playIcon"></div>
							<div className="video-title"></div>
						</div>
					</div>
					<div className="video-content">
						<div className="video-thumbanail">
							<img src={img.bittersweetTnail} alt="" />
							<div className="playIcon"></div>
							<div className="video-title"></div>
						</div>
					</div>
					<div className="video-content">
						<div className="video-thumbanail">
							<img src={img.fishesTnail} alt="" />
							<div className="playIcon"></div>
							<div className="video-title"></div>
						</div>
					</div>
					<div className="video-content">
						<div className="video-thumbanail">
							<img src={img.fishesTnail} alt="" />
							<div className="playIcon"></div>
							<div className="video-title"></div>
						</div>
					</div>
					<div className="video-content">
						<div className="video-thumbanail">
							<img src={img.fishesTnail} alt="" />
							<div className="playIcon"></div>
							<div className="video-title"></div>
						</div>
					</div>
				</div>
			</VideoSection>
		</>
	);
}
