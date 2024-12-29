import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width : 100%;
  height : 100vh;
  flex-direction: column;
  max-width: 430px;
  box-sizing: border-box; /* 여백 포함 크기 계산 */
  font-family: Arial, sans-serif;
  margin : auto;
  background-color: #fff;
  font-weight : bold;
`;

export const InputContainer = styled.div`
  flex : 1;
  width: 100%;
  overflow-y : auto;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;


   /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

// 각 input 창 제목 컨테이너너

export const TitleContainer = styled.div`
flex-shrink: 0; /* 크기를 줄이지 않음 */
  width: 95%;
  height : 4vh;
  margin: 0px 10px;

  box-sizing: border-box;
  display : flex;
  align-items : center;
  /* h4 태그 스타일 */
  h4 {
    text-align: left; /* 왼쪽 정렬 */
    font-size: 18px; /* 폰트 크기 */
    font-weight: bold; /* 볼드 처리 */
    font-family: Arial, sans-serif;
  }
`;


// 맨 위 navbar 

export const Header = styled.div`
  display: flex;
  box-sizing: border-box; /* 여백 포함 크기 계산 */
  height : 10vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding : 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom : 1px solid #ccc;

  span{
    width : 50%;
    text-align : center;
  }
`;


export const BackButton = styled.button`
  width : 25%;
  display : flex;
  justify-content: left;
  align-items : center;
  background: none;
  border: none;
  font-size: 5vw;
  cursor: pointer;
`;

export const GiftButton = styled.button`
  width : 25%;
  padding: 10px 10px;
  background-color: #3EBEEE;
  color : #fff;
  font-weight : bold;
  border: none;
  border-radius : 5px;
  cursor: pointer;
  font-size: 14px;
`;


// 이미지 업로드 부분 

export const ImageUploadWrapper = styled.div`
  flex-shrink: 0; /* 크기를 줄이지 않음 */
  display: flex;
  align-items: center;
  justify-content: left;
  width: 95%;
  height : 10vh;
  margin : 0 10px;
`;

export const IconButton = styled.label`
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  background-color: #f1f1f1;
  border-radius : 5px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
`;

export const UploadedImage = styled.img`
  width: 20%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  margin-left: 10px;
`;

// 각 input 창창

export const InputField = styled.input`
flex-shrink: 0; /* 크기를 줄이지 않음 */
  display : flex;
  justify-content: left;
  width: 95%;
  height : 6vh;
  padding: 10px;
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;

// 버튼 부분 

export const ToggleButton = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  justify-content: left;
  width : 95%;
`;

export const GameToggleButton = styled.button`
  padding: 10px;
  border: 1px solid #3EBEEE;
  background-color: ${({ active }) => (active ? "#3EBEEE" : "#fff")};
  color: ${({ active }) => (active ? "white" : "#000")};
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const TextAreaField = styled.textarea`
  width: 95%;
  min-height: 10vh; /* 최소 높이 설정 */
  max-height: 20vh; /* 최대 높이 설정 */
  padding: 5px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  resize: none;
`;



// 하단 버튼 디자인인



export const BtnContainer = styled.div`
  height: 10vh; /* 하단 버튼 영역 고정 */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff; /* 배경 색상 */
`;

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