import React from 'react';
import styled from 'styled-components';
const VideoContent = styled.div`
	margin-right: 50px;
	width: 375px;
	.video-thumbanail {
		width: inherit;
		margin-bottom: 50px;
		border: 1px solid var(--white);
	}
`;

export default function videoContent({ img, title }) {
	return (
		<VideoContent>
			<div className="video-thumbanail">
				<img src={img} alt="" />
				<div className="video-title">{title}</div>
			</div>
		</VideoContent>
	);
}
