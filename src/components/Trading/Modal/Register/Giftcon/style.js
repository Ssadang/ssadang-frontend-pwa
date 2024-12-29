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
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const GiftconList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const GiftconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    border-color: #3ebeee;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
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

  &:hover {
    background-color: #36a9d0;
  }
`;