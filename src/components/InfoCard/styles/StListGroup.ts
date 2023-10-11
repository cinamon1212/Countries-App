import styled from 'styled-components';

export const StListGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: space-around;

	@media (min-width: 767px) {
		gap: 4rem;
	}

	@media (min-width: 1024px) {
		gap: 4rem;
	}
`;
