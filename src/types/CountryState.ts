import { Country } from './Country';
import { CountryDetails } from './CountryDetails';

export type CountryState = {
	countries: Country[];
	filteredCountries: Country[];
	countryNeighbors: string[] | [];
	countryDetails: CountryDetails;
	theme: 'dark' | 'light';
	currentPage: number;
	search: string;
	region?: { value: string };
	error: string | undefined;
	loading: boolean;
	loadingDetails: boolean;
	loadingNeighbors: boolean;
	pageSize: number;
};
