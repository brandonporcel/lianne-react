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
	color: var(--white);
	text-transform: uppercase;
	padding: 11px 0 7px;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	text-align: center;
	&:hover {
		color: ${(props) =>
			props.secondary ? 'var(--secondary-color)' : 'var(--black)'};
		background-color: ${(props) => props.secondaryBg || 'var(--white)'};
	}
`;

export default function Button({ text, secondaryBg }) {
	return (
		<Atag secondaryBg className="buttonComponent">
			{text}
		</Atag>
	);
}
