import { IoSearch } from 'react-icons/io5';
import { StInputContainer } from './styles/StInputContainer';
import { StInput } from './styles/StInput';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCurrentPage, setSearch } from '../../store/countriesSlice';

export const Search = () => {
	const dispatch = useAppDispatch();
	const { search } = useAppSelector((state) => state.countries);

	return (
		<StInputContainer>
			<IoSearch />
			<StInput
				value={search}
				onChange={(e) => {
					dispatch(setSearch(e.target.value));
					dispatch(setCurrentPage(1));
				}}
			/>
		</StInputContainer>
	);
};
