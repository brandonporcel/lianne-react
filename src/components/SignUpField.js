import React from 'react';
import styled from 'styled-components';
const FieldCtn = styled.div`
	padding-bottom: 40px;
	input,
	select {
		background: transparent;
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		border-bottom: 2px solid var(--white);
		font-size: 20px;
		font-family: 'Charter ITC W01';
		font-weight: 400;
		color: var(--white);
		outline: none;
		padding-bottom: 3px;
		&::placeholder {
			color: var(--white);
		}
	}
	@media screen and (max-width: 415px) {
		input,
		select {
			font-size: 16px;
		}
	}
`;
export default function SignUpField({ type, placeholder, tag }) {
	return (
		<FieldCtn>
			<input type={type} placeholder={placeholder} />
		</FieldCtn>
	);
}
