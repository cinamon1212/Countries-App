import styled from 'styled-components';

export const StHeader = styled.header`
	width: 100%;
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
	padding: 2rem;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	font-weight: var(--fw-bold);

	position: fixed;
	margin-bottom: 50px;
	z-index: 1;

	@media (min-width: 767px) {
		font-size: var(--fs-md);
	}
	@media (min-width: 1024px) {
		font-size: var(--fs-lrg);
	}
`;
