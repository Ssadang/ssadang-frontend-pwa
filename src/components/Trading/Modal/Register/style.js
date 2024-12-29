import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 350px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3ebeee;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

`;



