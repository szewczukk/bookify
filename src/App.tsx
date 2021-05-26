import React from 'react';
import Navigation from './components/Navigation';
import styled, { createGlobalStyle } from 'styled-components';

const App = () => (
	<>
		<Global />
		<Wrapper>
			<Navigation />
			<p>Wybierz stronę</p>
		</Wrapper>
	</>
);

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
