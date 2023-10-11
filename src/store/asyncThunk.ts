import { createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_COUNTRIES, filterByCode, searchByCountry } from '../config';
import { Country } from '../types/Country';
import { CountryDetails } from '../types/CountryDetails';
import axios from 'axios';

export const getCountries = createAsyncThunk<Country[]>('countries/getCountries', async function () {
	const response = await axios.get<Country[]>(ALL_COUNTRIES);
	return response.data;
});

export const getCountryDetails = createAsyncThunk<CountryDetails[], string | undefined>(
	'countries/getCountryDetails',
	async function (countryName) {
		const response = await axios.get<CountryDetails[]>(searchByCountry(countryName));
		return response.data;
	}
);

export const getCountryNeighbors = createAsyncThunk<{ name: string }[], string[] | undefined>(
	'countries/getCountryNeighbors',
	async function (countryBorders) {
		const response = await axios.get<{ name: string }[]>(filterByCode(countryBorders));
		return response.data;
	}
);
