import React from 'react';
import SocialIcon from './SocialIcon';
import styled from 'styled-components';
const FooterTag = styled.footer`
	margin: 0 auto;
	width: 608px;
	padding: 20px 0;
	.footer-text {
		text-align: center;
		font-size: 12px;
	}
`;
export default function Footer() {
	return (
		<FooterTag>
			<SocialIcon></SocialIcon>
			<p className="footer-text">
				© 2021 Warner Music UK Limited Privacy Policy | Terms Of Use | Cookies
				Policy | Cookies Settings
			</p>
		</FooterTag>
	);
}
