import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
	.tourSection {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 50%;
		background-image: url('../images/TourBG.jpg');
		z-index: -5;
	}
`;
export default function Tour() {
	return (
		<>
			<Container>
				<div className="tourSection"></div>
			</Container>
		</>
	);
}
