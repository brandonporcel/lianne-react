import React from 'react';
import styled from 'styled-components';
const MerchContentt = styled.li`
	margin-right: 50px;
	.merchImage {
		height: 380px;

		max-width: 380px;
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
