import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width : 100%;
  height : 100%;
  padding : 20px;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
  box-sizing: border-box; /* 여백 포함 크기 계산 */
  margin: auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  display: flex;
  box-sizing: border-box; /* 여백 포함 크기 계산 */
  height : 8vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding : 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom : 1px solid #ccc;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const TempSaveButton = styled.button`
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-bottom: 20px;
`;

export const IconButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f1f1f1;
  border-radius: 90%;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
`;

export const UploadedImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 90%;
  object-fit: cover;
  margin-left: 10px;
`;

export const InputField = styled.input`
  display : flex;
  justify-content: left;
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;


export const ToggleButton = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  justify-content: left;
  width : 95%;
`;

export const GameToggleButton = styled.button`
  padding: 10px;
  border: 1px solid ${({ active }) => (active ? "#3EBEEE" : "#fff")};
  background-color: ${({ active }) => (active ? "#3EBEEE" : "#fff")};
  color: ${({ active }) => (active ? "white" : "#000")};
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const TextAreaField = styled.textarea`
  width: 95%;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  resize: none;
`;

export const TitleContainer = styled.div`
  width: 95%;
  height : 30px;
  margin : 10px;
  box-sizing: border-box;
  display : flex;
  align-items : center;
  /* h4 태그 스타일 */
  h4 {
    text-align: left; /* 왼쪽 정렬 */
    font-size: 14px; /* 폰트 크기 */
    font-weight: bold; /* 볼드 처리 */
    font-family: Arial, sans-serif;
  }
`;


// 하단 버튼 디자인인





export const BtnContainer = styled.div`
  width : 100%;
  height : 10vh;
  border-top : 1px solid #ccc;
  display : flex;
  align-items : center;
  justify-content: center;
  margin-top: 20px;

`

export const SubmitButton = styled.button`
  width: 95%;
  padding: 10px;
  background-color: #3EBEEE;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;