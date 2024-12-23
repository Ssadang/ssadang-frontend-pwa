import React from 'react';
import { ModalOverlay, ModalContainer, ModalText, CloseButton } from './style'; // 스타일 import

function ModalComponent({ isOpen, onClose, text }) {
    if (!isOpen) return null; // 모달이 열려있지 않으면 렌더링하지 않음

    const handleClose = () => {
        onClose(); // 부모에게 전달받은 닫기 함수 호출출
    }

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}> {/* 부모 클릭 방지 */}
                <ModalText>{text}</ModalText>
                <CloseButton onClick={handleClose}>확인</CloseButton>
            </ModalContainer>
        </ModalOverlay>
    );
}

export default ModalComponent;
