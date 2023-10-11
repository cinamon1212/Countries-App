import { ReactNode } from 'react';
import { StMainWrapper } from './StMainWrapper';

interface MainProps {
	children?: ReactNode;
}

export const Main = ({ children }: MainProps) => {
	return <StMainWrapper>{children}</StMainWrapper>;
};
