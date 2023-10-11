import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StLink = styled(Link).attrs({
	to: '/',
})<{ theme: 'dark' | 'light'; to: string }>`
	color: var(--colors-text);
	text-decoration: none;
`;
// 	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
