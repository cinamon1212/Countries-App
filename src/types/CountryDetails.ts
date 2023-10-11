export interface CountryDetails {
	name: string;
	nativeName: string;
	flag: string;
	capital: string;
	population: string;
	region: string;
	subregion: string;
	topLevelDomain: string[] | [];
	currencies: { code: string; name: string }[] | [];
	languages: { name: string }[] | [];
	borders: string[] | [];
}

export const CountryDetailsInitial = {
	name: '',
	nativeName: '',
	flag: '',
	capital: '',
	population: '',
	region: '',
	subregion: '',
	topLevelDomain: [],
	currencies: [],
	languages: [],
	borders: [],
};
