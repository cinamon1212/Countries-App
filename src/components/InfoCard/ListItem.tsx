import { StListItem } from './styles/StListItem';

interface ListItemProps {
	jsx: string;
	text: string;
}

export const ListItem = ({ jsx, text }: ListItemProps) => {
	return (
		<StListItem>
			<b>{jsx}</b>
			{text}
		</StListItem>
	);
};
