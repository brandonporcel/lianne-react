import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const TermsCtn = styled.div`
	padding: 20px 0 0;
	font-size: 12px;
	span {
		transition: all 0.5s ease-in-out;
		cursor: pointer;
		&:hover {
			color: var(--secondary-color);
		}
	}
`;
export default function SignUpTerms() {
	const [display, setDisplay] = useState(false);
	const a = () => {
		if (display === false) {
			document.querySelector('.terms').addEventListener('click', () => {
				document.querySelector('.terms-message').classList.remove('none');
			});
			setDisplay(true);
		} else {
			document.querySelector('.terms').addEventListener('click', () => {
				document.querySelector('.terms-message').classList.add('none');
			});
			setDisplay(false);
		}
	};
	useEffect(() => {
		a();
	}, [display]);
	return (
		<TermsCtn>
			<span class="terms">Terms</span>
			<p class="terms-message none">
				By submitting my information, I agree to receive personalized updates
				and marketing messages about Lianne&nbsp;La&nbsp;Havas, based on my
				information, interests, activities, website visits and device data and
				in accordance with the{' '}
				<a
					href="http://wminewmedia.com/privacy/"
					target="_blank"
					class="external-link"
					rel="noreferrer"
					title="Follow link"
				>
					Privacy&nbsp;Policy
				</a>
				. I understand that I can opt-out at any time by emailing{' '}
				<a href="mailto:privacypolicy@wmg.com">privacypolicy@wmg.com</a>.
			</p>
		</TermsCtn>
	);
}
