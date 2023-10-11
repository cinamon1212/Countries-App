import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../types/Country';
import { CountryDetailsInitial } from '../types/CountryDetails';
import { getCountries, getCountryDetails, getCountryNeighbors } from './asyncThunk';
import { CountryState } from '../types/CountryState';

const initialState: CountryState = {
	countries: [],
	filteredCountries: [],
	theme: 'dark',
	currentPage: 1,
	search: '',
	region: undefined,
	loading: false,
	error: undefined,
	loadingDetails: false,
	countryDetails: CountryDetailsInitial,
	countryNeighbors: [],
	loadingNeighbors: false,
	pageSize: 16,
};

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		toggleTheme(state, action: PayloadAction<'dark' | 'light'>) {
			state.theme = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilteredCountries(state, action: PayloadAction<Country[]>) {
			state.filteredCountries = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setRegion(state, action: PayloadAction<{ value: string } | undefined>) {
			state.region = action.payload;
		},
		setPageSize(state, action: PayloadAction<number>) {
			state.pageSize = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCountries.pending, (state) => {
			state.loading = true;
			state.error = undefined;
		});
		builder.addCase(getCountries.fulfilled, (state, action) => {
			state.loading = false;
			state.countries = action.payload;
		});
		builder.addCase(getCountries.rejected, (state, action) => {
			state.error = action.error.message;
		});
		builder.addCase(getCountryDetails.pending, (state) => {
			state.loadingDetails = true;
			state.error = undefined;
		});
		builder.addCase(getCountryDetails.fulfilled, (state, action) => {
			state.loadingDetails = false;
			state.countryDetails = action.payload[0];
		});
		builder.addCase(getCountryDetails.rejected, (state, action) => {
			state.error = action.error.message;
		});
		builder.addCase(getCountryNeighbors.pending, (state) => {
			state.loadingNeighbors = true;
			state.error = undefined;
		});
		builder.addCase(getCountryNeighbors.fulfilled, (state, action) => {
			state.loadingNeighbors = false;
			state.countryNeighbors = action.payload.map((c) => c.name);
		});
		builder.addCase(getCountryNeighbors.rejected, (state, action) => {
			state.error = action.error.message;
		});
	},
});

export const { toggleTheme, setCurrentPage, setFilteredCountries, setSearch, setRegion, setPageSize } =
	countriesSlice.actions;
export default countriesSlice.reducer;
