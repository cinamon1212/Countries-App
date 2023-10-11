import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { StGoBackButton } from './styles/StGoBackButton';
import { InfoCard } from '../components/InfoCard/InfoCard';
import { StContainer } from './styles/StContainer';
import { Loader } from '../components/Loader';
import { useAppDispatch, useAppSelector } from '../hook';
import { getCountryDetails } from '../store/asyncThunk';

export const Details = () => {
	const { name } = useParams();
	const dispatch = useAppDispatch();
	const { loadingDetails } = useAppSelector((state) => state.countries);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getCountryDetails(name));
	}, [name, dispatch]);

	return !loadingDetails ? (
		<StContainer direction='column'>
			<StGoBackButton type='button' onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</StGoBackButton>
			<InfoCard />
		</StContainer>
	) : (
		<Loader size={150} mTop={'100px'} />
	);
};
