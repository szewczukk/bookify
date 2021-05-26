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
	isbn: number;
	publishmentYear: number;
	authorId: number;
	publisherId: number;
}
