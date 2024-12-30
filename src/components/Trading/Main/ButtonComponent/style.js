import styled from "styled-components";

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  width: 25%;
  height : 85%;
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
  font-weight: bold;
  font-size : 18px;
`;

export const RegisterButton = styled.button`
  position: fixed;
  bottom: 15%; /* 화면 아래에서 5% */
  right: 5%; /* 화면 오른쪽에서 5% */
  padding: 10px 20px;
  background-color: #3EBEEE; /* 오렌지색 배경 */
  color: white;
  border: none;
  border-radius: 30px; /* 둥근 버튼 */
  font-size: 20px; /* 반응형 글자 크기 */
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  z-index: 1000;
`;