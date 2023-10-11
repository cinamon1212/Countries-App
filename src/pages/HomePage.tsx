import { useEffect, ReactNode } from 'react';
import { Country } from '../types/Country';
import { Controls } from '../components/Controls/Controls';
import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { StNoResults } from './styles/StNoResults';
import { Loader } from '../components/Loader';
import { PagePagination } from '../components/PagePagination/PagePagination';
import { useAppDispatch, useAppSelector } from '../hook';
import { setFilteredCountries, setPageSize } from '../store/countriesSlice';
import { getCountries } from '../store/asyncThunk';

export const HomePage = () => {
	const { countries, filteredCountries, currentPage, loading, error, search, region, pageSize } = useAppSelector(
		(state) => state.countries
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!countries.length) {
			dispatch(getCountries());
		}
	}, [countries.length, dispatch]);

	useEffect(() => {
		const handleSearch = (search?: string, region?: { value: string }) => {
			let data = [...countries];
			if (region) data = data.filter((county) => county.region.includes(region?.value));
			if (search) data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
			dispatch(setFilteredCountries(data));
		};
		handleSearch(search, region);
	}, [countries, dispatch, search, region]);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 767) dispatch(setPageSize(16));
			else if (window.innerWidth < 767) dispatch(setPageSize(7));
		});
	}, [dispatch]);

	const currentCountries = filteredCountries.slice(
		(currentPage - 1) * pageSize,
		(currentPage - 1) * pageSize + pageSize
	);
	let content: ReactNode;
	if (error) content = <h1>{error}</h1>;
	else if (!currentCountries.length && !loading) content = <StNoResults>No results</StNoResults>;
	else if (loading) content = <Loader size={150} mTop={'100px'} />;
	else if (!loading)
		content = (
			<>
				<List>
					{currentCountries.map((country: Country) => {
						const countryInfo = {
							img: country.flags.png,
							name: country.name,
							info: [
								{
									title: 'Population',
									description: country.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: country.region,
								},
								{
									title: 'Capital',
									description: country.capital,
								},
							],
						};
						return <Card key={country.name} {...countryInfo} />;
					})}
				</List>
				<PagePagination />
			</>
		);
	return (
		<>
			<Controls />
			{content}
		</>
	);
};
