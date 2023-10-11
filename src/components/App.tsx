import { useLayoutEffect } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Details } from '../pages/Details';
import { NotFound } from '../pages/NotFound';
import { useAppSelector } from '../hook';

function App() {
	const { theme } = useAppSelector((state) => state.countries);

	useLayoutEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path={'/country/:name'} element={<Details />} />
					<Route path={'*'} element={<NotFound />} />
				</Routes>
			</Main>
		</>
	);
}

export default App;
