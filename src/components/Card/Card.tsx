import { StCardBody } from './styles/StCardBody';
import { StCardImage } from './styles/StCardImage';
import { StCardItem } from './styles/StCardItem';
import { StCardList } from './styles/StCardList';
import { StCardTitle } from './styles/StCardTitle';
import { StCardWrapper } from './styles/StCardWrapper';
import { useNavigate } from 'react-router-dom';

interface CardProps {
	img: string;
	name: string;
	info: { title: string; description: string }[];
}

export const Card = ({ img, name, info = [] }: CardProps) => {
	const navigate = useNavigate();

	return (
		<StCardWrapper onClick={() => navigate(`/country/${name}`, { state: { name } })}>
			<StCardImage src={img} alt={name} />
			<StCardBody>
				<StCardTitle>{name}</StCardTitle>
				<StCardList>
					{info.map((el) => (
						<StCardItem key={el.title}>
							<span>{el.title}: </span>
							{el.description}
						</StCardItem>
					))}
				</StCardList>
			</StCardBody>
		</StCardWrapper>
	);
};
