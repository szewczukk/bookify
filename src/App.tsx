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
import Modal from './components/Modal';
import EditAuthorPage from './pages/EditAuthorPage';
import AllPublishersPage from './pages/AllPublishersPage';
import CreatePublisherPage from './pages/CreatePublisherPage';
import EditPublisherPage from './pages/EditPublisherPage';
import AllBooksPage from './pages/AllBooksPage';
import CreateBookPage from './pages/CreateBookPage';
import EditBookPage from './pages/EditBookPage';

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
					<Route path="/edit-author/:id">
						<EditAuthorPage />
					</Route>
					<Route path="/publishers/">
						<AllPublishersPage />
					</Route>
					<Route path="/create-publisher/">
						<CreatePublisherPage />
					</Route>
					<Route path="/edit-publisher/:id">
						<EditPublisherPage />
					</Route>
					<Route path="/books/">
						<AllBooksPage />
					</Route>
					<Route path="/create-book">
						<CreateBookPage />
					</Route>
					<Route path="/edit-book/:id">
						<EditBookPage />
					</Route>
					<Route path="/" exact>
						<p>Wybierz stronę</p>
					</Route>
				</Switch>
			</Wrapper>
			<Modal />
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

	@media (min-width: 1200px) {
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
