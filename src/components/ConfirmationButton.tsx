import React, { useState } from 'react';

interface Props {
	text: string;
	afterConfirmation: () => void;
	cypressId: string;
}

const DeleteAuthor = ({ text, afterConfirmation, cypressId }: Props) => {
	const [needsConfirmation, setConfirmation] = useState(false);

	const onClick = () => {
		if (needsConfirmation) {
			afterConfirmation();
		} else {
			setConfirmation((prev) => !prev);
		}
	};

	return (
		<button onClick={onClick} data-cy={cypressId}>
			{needsConfirmation ? 'Czy na pewno?' : text}
		</button>
	);
};

export default DeleteAuthor;
