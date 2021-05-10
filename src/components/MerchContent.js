import React from 'react';
import styled from 'styled-components';
const MerchContentt = styled.li`
	margin-right: 50px;
	.merchImage {
		height: 380px;
		width: 380px;
	}
`;
export default function MerchContent({ img }) {
	return (
		<MerchContentt className="merchContent">
			<div className="merchImage">
				<img src={img} alt="" />
			</div>
			<div className="merchCTA">
				<a href="/">
					<span></span>
					<span></span>
				</a>
			</div>
		</MerchContentt>
	);
}
