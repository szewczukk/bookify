import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import styled, { createGlobalStyle } from 'styled-components';
import { fetchAuthors } from './store/authors';
import { fetchPublishers } from './store/publishers';
import { fetchBooks } from './store/books';
import { useAppDispatch } from './store';
import AllAuthorsPage from './pages/AllAuthorsPage';
import CreateAuthorPage from './pages/CreateAuthorPage';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAuthors());
		dispatch(fetchPublishers());
		dispatch(fetchBooks());
	}, []);

	return (
		<BrowserRouter>
			<Global />
			<Wrapper>
				<Navigation />
				<Switch>
					<Route path="/authors/">
						<AllAuthorsPage />
					</Route>
					<Route path="/create-author">
						<CreateAuthorPage />
					</Route>
					<Route path="/" exact>
						<p>Wybierz stronę</p>
					</Route>
				</Switch>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	padding: 16px;
	background-color: rgb(240, 240, 240);

	@media (min-width: 1000px) {
		width: 1000px;
		margin: 0 auto;

		display: grid;
		grid-template-columns: 250px 1fr;
		grid-template-rows: 1fr;
	}
`;

const Global = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	body {
		background-color: #ddd;
		font-size: 16px;
	}
`;
