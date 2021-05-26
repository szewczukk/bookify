import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import styled from 'styled-components';

import { actions } from '../store/modal';

const Modal = () => {
	const { visible, text } = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();

	return (
		<OuterWrapper visible={visible}>
			<InnerWrapper>
				<p data-cy="modal-text">{text}</p>
				<button
					data-cy="modal-submit"
					onClick={() => dispatch(actions.toggleModal())}
				>
					Ok
				</button>
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Modal;

const OuterWrapper = styled.div<{ visible: boolean }>`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;

	background: rgba(0, 0, 0, 0.25);
	visibility: ${(state) => (state.visible ? 'visible' : 'hidden')};

	display: flex;
	justify-content: center;
	align-items: center;
`;

const InnerWrapper = styled.div`
	width: 400px;
	height: 250px;
	background: #eee;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
