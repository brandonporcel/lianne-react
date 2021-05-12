import React from 'react';
import styled from 'styled-components';
const MerchContentt = styled.li`
	margin-right: 50px;
	.merchImage {
		height: 380px;
		width: 380px;
	}
	@media screen and (max-width: 1024px) {
		margin-right: 0;

		.merchImage {
			width: 80%;
		}
	}
	@media screen and (max-width: 415px) {
		display: flex;
		justify-content: center;
	}
`;
export default function MerchContent({ img }) {
	return (
		<MerchContentt className="merchContent">
			<div className="merchImage">
				<img src={img} alt="" />
			</div>
		</MerchContentt>
	);
}
