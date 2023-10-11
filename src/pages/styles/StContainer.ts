import styled from 'styled-components';

export const StContainer = styled.div<{ direction?: string }>`
	width: 100%;
	margin: 0 auto;
	max-width: 1240px;
	justify-content: space-between;
	display: flex;
	flex-direction: ${(props) => props.direction};
`;
