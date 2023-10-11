import styled from 'styled-components';

// interface StInputProps {
// 	search: string;
// 	setSearch: () => void;
// }

// interface StChangedProps {
// 	value: string;
// 	search: string;
// 	setSearch: () => void;
// }

export const StInput = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...',
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--colors-ui-base);
	color: var(--colors-text);
	width: 100%;
`;
