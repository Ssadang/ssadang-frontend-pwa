import React from "react";
import { ModalOverlay, ModalContent, ConfirmButton } from "./style";

const Modal = ({ message, onConfirm }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <h4>{message}</h4>
                <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
