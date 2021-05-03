import React from 'react';
import img from '../img';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';
const SectionTag = styled.section`
	background-color: red;
	margin: 0 auto;
	display: block;
`;
export default function Home() {
	return (
		<div>
			<SectionTag>
				<div className="logo-ctn">
					<img src={img.purpleLogo} alt={img.whiteLogo} />
				</div>
				<div className="album-ctn">
					<div className="album-img">
						<img src={img.album} alt="" />
					</div>
					<div className="newAlbumAndOutNow"></div>
					<div className="listenNow">{/* <a href="#"></a> */}</div>
				</div>
				<footer>
					<p>blablalblalblalba</p>
					<p>
						<SocialIcon></SocialIcon>
						{/* <a href=""></a>
						<a href=""></a>
						<a href=""></a>
						<a href=""></a> */}
					</p>
				</footer>
			</SectionTag>
		</div>
	);
}
