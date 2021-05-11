import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import {
	faFacebookF,
	faSpotify,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const SocialCtn = styled.p`
	padding: 25px 0;
	display: flex;
	justify-content: center;
	a {
		font-size: 25px;
		margin-right: 35px;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: var(--secondary-color);
		}
	}
`;

export default function SocialIcon() {
	return (
		<SocialCtn>
			<a
				href="https://twitter.com/liannelahavas"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
			</a>
			<a
				href="https://facebook.com/liannelahavas"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
			</a>
			<a
				href="https://youtube.com/user/liannelahavas"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
			</a>
			<a
				href="https://open.spotify.com/artist/2RP4pPHTXlQpDnO9LvR7Yt"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
			</a>
			<a
				href="https://instagram.com/liannelahavas"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
			</a>
		</SocialCtn>
	);
}
