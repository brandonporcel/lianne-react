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
		color: var(--black);
		background-color: var(--white);
	}
`;

export default function Button({ text }) {
	const onMouseLeave = (e) => {
		if (window.location.pathname === '/') {
			e.target.style.color = 'var(--white)';
			e.target.style.border = '1px solid var(--white)';
		}
	};
	const onMouseOver = (e) => {
		if (window.location.pathname === '/') {
			e.target.style.color = 'var(--secondary-color)';
			e.target.style.border = '1px solid var(--secondary-color)';
			e.target.style.backgroundColor = 'transparent';
		}
	};

	return (
		<Atag
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
			className="buttonComponent"
		>
			{text}
		</Atag>
	);
}
