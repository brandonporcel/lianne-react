import React from 'react';
import styled from 'styled-components';

const Atag = styled.a`
	font-size: 20px;
	font-weight: 400;
	display: block;
	border: ${(props) =>
		props.secondary
			? '1px solid var(--secondary-color)'
			: '1px solid var(--white)'};
	text-transform: uppercase;
	padding: 11px 0 7px;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	text-align: center;
	&:hover {
		background: blue;
		color: ${(props) =>
			props.secondaryColor ? '1px solid red' : '1px solid green'};
		/* background-color: ${(props) =>
			props.secondary ? '1px solid blue' : '1px solid var(--black)'}; */
	}
`;

export default function Button({ text }) {
	return <Atag className="buttonComponent">{text}</Atag>;
}
