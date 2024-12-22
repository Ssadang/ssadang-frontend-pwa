import styled from "styled-components";

export const StyledButton = styled.button`
  width: 70px;
  height : 35px;
  padding: 5px;
  margin-right: 5px;
  margin-top : 5px;
  margin-bottom : 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#3EBEEE" : "#ffffff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  border-radius: 15px;
  border : 1px solid #3EBEEE;
`;