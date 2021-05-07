import React from 'react';
import styled from 'styled-components';
import img from '../img';
import Button from './Button';
const SetBackground = {
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
		background-image: url(${img.tourNoiseBG});
		h4 {
			padding-bottom: 40px;
			font-size: 24px;
		}
		.ticket-ctn {
			height: auto;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			padding: 10px 0;
			font-family: serif;
			p {
				padding: 0 5px;
			}
			a {
				height: 39px;
				padding: 10px;
				width: 70%;
				font-size: 15px;
				text-transform: lowercase;
			}
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
						<div className="ticket-ctn">
							<p>3.5.2021</p>
							<p>Florencio valera</p>
							<p>Buenos AIRES, argentina</p>
							<Button text="tickets"></Button>
						</div>
						<div className="ticket-ctn">
							<p>3.5.2021</p>
							<p>Teatro juan domingo Peron</p>
							<p>Lomas de Zamora, argentina</p>
							<Button text="tickets"></Button>
						</div>
					</div>
				</div>
				<div className="tourBackground" style={SetBackground}></div>
			</Container>
		</>
	);
}
