import styled from "styled-components";

export const ProductButton = styled.button`
  width: 100%;
  max-width: 430px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: left;
`;

export const GameButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: ${(props) => (props.isFull ? "100px" : "80px")};
  height: 30px;
  border-radius: 10px;
  border: ${(props) => (props.isFull ? "1px solid #B0B0B0" : "1px solid #3EBEEE ")};
  background-color: ${(props) => (props.isFull ? "#B0B0B0" : "#3EBEEE")};
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.isFull ? "not-allowed" : "pointer")};
`;

export const ProductImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius : 10px;
`;

export const ProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const ProductLocationDateTime = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
  color: #777;
`;

export const ProductPrice = styled.span`
  font-weight: 900;
  font-size: 16px;
  color: #3EBEEE;
`;

export const ProductIconSection = styled.section`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  height: 16px;
`;

export const IconImg = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-left: 1px;
`;

export const ChatNumber = styled.span`
  font-size: 12px;
  color: #555;
  margin-left: 1px;
`;

export const HeartNumber = styled.span`
  font-size: 12px;
  color: #555;
  margin-left: 1px;
`;
