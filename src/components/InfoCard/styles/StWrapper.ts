import styled from 'styled-components';

export const StWrapper = styled.section`
	margin-top: 3rem;
	display: flex;
	gap: 2rem;
	align-items: center;
	flex-direction: column;

	@media (min-width: 767px) {
		gap: 4rem;
		flex-direction: row;
		margin-top: 5rem;
	}
	@media (min-width: 1024px) {
		gap: 4rem;
	}
`;
