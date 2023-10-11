import styled from 'styled-components';

export const StInputContainer = styled.label`
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	border-radius: var(--radii);
	box-shadow: var(--shadow);
	width: 80%;
	margin-bottom: 1rem;
	background-color: var(--colors-ui-base);
	@media (min-width: 767px) {
		margin: 0;
		width: 280px;
	}
`;
