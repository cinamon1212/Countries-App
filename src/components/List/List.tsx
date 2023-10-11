import { ReactNode } from 'react';
import { StListWrapper } from './StListWrapper';

interface ListProps {
	children?: ReactNode;
}

export const List = ({ children }: ListProps) => {
	return <StListWrapper>{children}</StListWrapper>;
};
