import React from 'react';
import styled from 'styled-components';
import img from '../img';
import Button from './Button';

const SectionTag = styled.section`
	margin: 0 auto;
	width: 608px;
	.newAlbumAndOutNow {
		display: flex;
		justify-content: space-between;
		height: auto;
		padding: 20px 0;
		& span {
			font-size: 32px;
		}
	}
`;

export default function Home() {
	return (
		<div>
			<SectionTag>
				<div>
					<img src={img.purpleLogo} alt={img.whiteLogo} />
				</div>
				<div>
					<div>
						<img src={img.album} alt="" />
					</div>
					<div className="newAlbumAndOutNow">
						<span>The new album</span>
						<span>Out now</span>
					</div>
					<div>
						<Button text="LISTEN"></Button>
					</div>
				</div>
			</SectionTag>
		</div>
	);
}
