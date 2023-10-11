import styled from 'styled-components';

export const StImage = styled.img`
	width: 100%;
	object-fit: contain;
	box-shadow: var(--shadow);

	@media (min-width: 767px) {
		width: 50%;
	}
`;
