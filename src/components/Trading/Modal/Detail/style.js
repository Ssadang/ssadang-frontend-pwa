import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  z-index: 999; /* 다른 요소 위로 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 60%;
  height : 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
`;

export const ModalText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 10px;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3EBEEE;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #3EBEEE;
  }

  &:active {
    background-color: #3EBEEE;
  }
`;
