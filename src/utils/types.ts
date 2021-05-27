export interface Author {
	id: number;
	firstName: string;
	lastName: string;
}

export interface Publisher {
	id: number;
	name: string;
	establishmentYear: number;
}

export interface Book {
	id: number;
	title: string;
	isbn: string;
	publishmentYear: number;
	authorId: number;
	publisherId: number;
}

export function isBook(element: Book | Author | Publisher): element is Book {
	return (element as Book).title !== undefined;
}

export function isAuthor(
	element: Book | Author | Publisher,
): element is Author {
	return (element as Author).firstName !== undefined;
}

export function isPublisher(
	element: Book | Author | Publisher,
): element is Publisher {
	return (element as Publisher).name !== undefined;
}
