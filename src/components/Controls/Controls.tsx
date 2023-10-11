import { StCustomSelect } from './styles/StCustomSelect';
import { Search } from '../Search/Search';
import { StControlsWrapper } from './styles/StControlsWrapper';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCurrentPage, setFilteredCountries, setRegion } from '../../store/countriesSlice';
import { SingleValue } from 'react-select';

interface MyOption {
	value: string;
	label: string;
}

const options: MyOption[] = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

export const Controls = () => {
	const dispatch = useAppDispatch();
	const { countries, search, region } = useAppSelector((state) => state.countries);

	const getValue = () => {
		return region ? options.find((r) => r.value === region.value) : '';
	};

	const onChange = (newValue: SingleValue<string | MyOption>) => {
		dispatch(setCurrentPage(1));
		dispatch(setRegion(newValue as { value: string }));
	};

	useEffect(() => {
		const handleSearch = (search?: string, region?: { value: string }) => {
			let data = [...countries];
			if (region?.value) data = data.filter((county) => county.region.includes(region.value));
			if (search) data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
			dispatch(setFilteredCountries(data));
		};

		handleSearch(search, region);
	}, [search, region, countries, dispatch]);

	return (
		<StControlsWrapper>
			<Search />
			<StCustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={getValue()}
				onChange={onChange}
			/>
		</StControlsWrapper>
	);
};
