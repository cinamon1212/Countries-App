import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { StSwitcher } from './styles/StSwitcher';
import { StHeader } from './styles/StHeader';
import { StContainer } from '../../pages/styles/StContainer';
import { StLink } from './styles/StLink';
import { useAppDispatch, useAppSelector } from '../../hook';
import { toggleTheme } from '../../store/countriesSlice';

export const Header = () => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state) => state.countries);

	return (
		<StHeader>
			<StContainer direction='row'>
				<StLink theme={theme} to={'/'}>
					Where is the world?
				</StLink>
				<StSwitcher onClick={() => dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'))}>
					{theme === 'light' ? <IoMoonOutline size='16px' /> : <IoMoon size='16px' />} {theme} Theme
				</StSwitcher>
			</StContainer>
		</StHeader>
	);
};
