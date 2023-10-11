import styled from 'styled-components';

export const StControlsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	@media (max-width: 767px) {
		flex-direction: column;
		gap: 10px;
	}
`;
