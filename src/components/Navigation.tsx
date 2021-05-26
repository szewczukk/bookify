import React from 'react';

const Navigation = () => (
	<nav data-cy="navigation">
		<div data-cy="authors">
			<p>Autorzy</p>
			<ul>
				<li>
					<a>Wszyscy</a>
				</li>
			</ul>
		</div>
		<div data-cy="publishers">
			<p>Wydawnictwa</p>
			<ul>
				<li>
					<a>Wszystkie</a>
				</li>
			</ul>
		</div>
		<div data-cy="books">
			<p>Książki</p>
			<ul>
				<li>
					<a>Wszystkie</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navigation;
