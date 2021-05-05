import React from 'react';
import styled from 'styled-components';
const Atag = styled.a`
	font-size: 20px;
	font-weight: 400;
	display: block;
	border: 1px solid var(--white);
	text-transform: uppercase;
	padding: 11px 0 7px;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	text-align: center;
	&:hover {
		color: var(--secondary-color);
		border: 1px solid var(--secondary-color);
	}
`;
export default function Button({ text }) {
	return <Atag>{text}</Atag>;
}
