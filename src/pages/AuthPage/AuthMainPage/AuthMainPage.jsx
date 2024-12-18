import React from 'react';
import { ButtonContainer, Container, HighlightedText, SubTitle, Title, TitleContainer } from './style';
import SubmitButtonComponent from '../../../components/SubmitButtonComponent/SubmitButtonComponent';
import { useNavigate } from 'react-router-dom';


function AuthMainPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Logo */}
      <div>AuthMainPage Logo</div>

      {/* Title */}
      <TitleContainer>
        <Title>
          <HighlightedText>S</HighlightedText>
          AMSUNG
        </Title>

        <Title>
          <HighlightedText>S</HighlightedText>
          W
        </Title>

        <Title>
          <HighlightedText>A</HighlightedText>
          CADEMY
        </Title>

        <Title>
          <HighlightedText>F</HighlightedText>
          OR
        </Title>

        <Title>
          <HighlightedText>Y</HighlightedText>
          OUTH
        </Title>

        <Title>
          WITH
          <HighlightedText>SSADANG</HighlightedText>
        </Title>

        <SubTitle>
          <HighlightedText>SSADANG</HighlightedText>&nbsp;
          에 오신것을 환영합니다!
        </SubTitle>
      </TitleContainer>

      {/* Button */}
      <ButtonContainer>
        {/* <Button>로그인 / 회원가입</Button> */}
        {/* 대화 상자 숨기기 기본 설정  */}
        <SubmitButtonComponent onClick={() => navigate('/auth/signin')} text="로그인 / 회원가입" />
        <SubmitButtonComponent onClick={() => alert("메인화면 바로가기 버튼 클릭")} text="메인화면 바로가기"/>
        <SubmitButtonComponent onClick={() => alert("SSADANG 소개 클릭")} text="SSADANG 소개" />
      </ButtonContainer>
    </>
  )
}

export default AuthMainPage;