import React from 'react';
import styled from 'styled-components';
const DobCtn = styled.div`
	.fieldCtn {
		padding-bottom: 40px;
		label {
			display: block;
			text-align: left;
			font-size: 20px;
			padding-bottom: 15px;
		}
		.dobMonthAndDay {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}

	input,
	select {
		background: transparent;
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		border-bottom: 2px solid #fff;
		font-size: 20px;
		font-family: 'Charter ITC W01';
		font-weight: 400;
		color: #fff;
		outline: none;
		padding-bottom: 3px;
	}
`;
export default function SignUpSelect() {
	return (
		<DobCtn>
			<div className="fieldCtn">
				<select name="country">
					<option value>Select A Country</option>
					<option value="argentina">Argentina el mas grande</option>
					<option value="maradonia">Maradonia</option>
				</select>
			</div>
			<div className="fieldCtn">
				<label htmlFor="/">Date Of Birth</label>
				<div className="dobMonthAndDay">
					<div>
						<select name="dobMonth">
							<option value="">Month</option>
							<option value="1">January</option>
							<option value="6">June</option>
							<option value="12">December</option>
						</select>
					</div>
					<div>
						<select name="dobMonth">
							<option value="">Day</option>
							<option value="1">1</option>
							<option value="15">15</option>
							<option value="31">31</option>
						</select>
					</div>
				</div>
			</div>
		</DobCtn>
	);
}
