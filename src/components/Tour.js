import React from 'react';
import styled from 'styled-components';
import img from '../img';

import Event from './Event';
const SetBackground = {
	backgroundImage: `url(${img.tourBG})`,
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
		background-image: url(${img.noiseBG});
		h4 {
			padding-bottom: 40px;
			font-size: 24px;
		}
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
					<h4>Live Dates</h4>
					<div>
						<Event
							date="9.12.2018"
							place="Juan Domingo Peron Theater"
							city="Lomas de Zamora, Argentina"
						></Event>
						<Event
							date="3.5.2021"
							place="Florencio Valera Stadium"
							city="Buenos Aires, Argentina"
						></Event>
					</div>
				</div>
				<div className="tourBackground" style={SetBackground}></div>
			</Container>
		</>
	);
}
