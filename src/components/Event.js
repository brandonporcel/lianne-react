import React from 'react';
import Button from './Button';
import styled from 'styled-components';
const EventCtn = styled.div`
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
`;
export default function Event({ date, place, city }) {
	return (
		<EventCtn>
			<p>{date}</p>
			<p> {place} </p>
			<p> {city} </p>
			<Button text="tickets"></Button>
		</EventCtn>
	);
}
