import { useEffect } from 'react';
import { StImage } from './styles/StImage';
import { StList } from './styles/StList';
import { StListGroup } from './styles/StListGroup';
import { StListItem } from './styles/StListItem';
import { StTitle } from './styles/StTitle';
import { StWrapper } from './styles/StWrapper';
import { ListItem } from './ListItem';
import { StMeta } from './styles/StMeta';
import { StTagGroup } from './styles/StTagGroup';
import { StTag } from './styles/StTag';
import { StInfoWrapper } from './styles/StInfoWrapper';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Loader } from '../Loader';
import { getCountryNeighbors } from '../../store/asyncThunk';

export const InfoCard = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { countryNeighbors, loadingNeighbors, countryDetails } = useAppSelector((state) => state.countries);
	const {
		borders,
		nativeName,
		population,
		region,
		subregion,
		capital,
		flag,
		name,
		topLevelDomain,
		currencies,
		languages,
	} = countryDetails;

	useEffect(() => {
		if (borders?.length) dispatch(getCountryNeighbors(borders));
	}, [borders, dispatch]);

	const arrayToList = [
		['Native name: ', nativeName],
		['Population: ', population],
		['Region: ', region],
		['Sub region: ', subregion],
		['Capital: ', capital],
	];

	return (
		<StWrapper>
			<StImage src={flag} alt={name} />
			<StInfoWrapper>
				<StTitle>{name}</StTitle>
				<StListGroup>
					<StList>
						{arrayToList.map((el) => (
							<ListItem key={el[1]} jsx={el[0]} text={el[1]} />
						))}
					</StList>
					<StList>
						<StListItem>
							{' '}
							<b>Top Level Domain </b>
							{topLevelDomain.map((d) => (
								<span key={d}>{d}</span>
							))}
						</StListItem>
						<StListItem>
							{' '}
							<b>Currency </b>
							{currencies.map((c) => (
								<span key={c.code}>{c.name} </span>
							))}
						</StListItem>
						<StListItem>
							{' '}
							<b>Languages </b>
							{languages.map((l) => (
								<span key={l.name}>{l.name}</span>
							))}
						</StListItem>
					</StList>
				</StListGroup>
				<StMeta>
					<b>Border Countries</b>
					{!borders?.length ? (
						<span>There is no border countries</span>
					) : !loadingNeighbors ? (
						<StTagGroup>
							{countryNeighbors.map((n) => (
								<StTag key={n} onClick={() => navigate(`/country/${n}`)}>
									{n}
								</StTag>
							))}
						</StTagGroup>
					) : (
						<Loader size={70} mTop={'30px'} />
					)}
				</StMeta>
			</StInfoWrapper>
		</StWrapper>
	);
};
