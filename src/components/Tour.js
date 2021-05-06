import React from 'react';
import styled from 'styled-components';
import img from '../img';
var SetBackground = {
	backgroundImage: `url(${img.tour})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};
const Container = styled.div`
	/* esta medida es a ojo,deberia ser un calc. height de la pagina - le medida del header y footer */
	height: 430px;
	display: flex;
	align-items: center;
	.tourSection {
		height: auto;
		padding: 60px 50px 40px;
		width: 50%;
		width: 680px;
		height: auto;
		margin: 40px auto 40px 40%;
		background-color: red;
		background-image: url(${img.tourNoiseBG});
	}
	.tourBackground {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 50%;
		z-index: -5;
	}
`;
export default function Tour() {
	return (
		<>
			<Container>
				<div className="tourSection">
					<h4>NANKASD</h4>
				</div>
				<div className="tourBackground" style={SetBackground}></div>
			</Container>
		</>
	);
}
