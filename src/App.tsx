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
	width: 1000px;
	padding: 16px;
	margin: 0 auto;
	display: grid;

	grid-template-columns: 250px 1fr;
	grid-template-rows: 1fr;

	background-color: rgb(240, 240, 240);
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
