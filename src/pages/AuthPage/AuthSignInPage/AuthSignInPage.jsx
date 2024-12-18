import React, { useState } from 'react';
import { InputContainer, PasswordViewer, RevertContainer, SignInInputContainer, SignInInputTitle, SubContentText, SubContentTextContainer } from './style';
import { FaChevronLeft } from "react-icons/fa";
import { IoEyeOutline, IoEyeSharp } from "react-icons/io5";
import InputComponent from '../../../components/InputComponent/InputComponent';
import SubmitButtonComponent from '../../../components/SubmitButtonComponent/SubmitButtonComponent';
import { useNavigate } from 'react-router-dom';

function AuthSignInPage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const idOnChange = (e) => {
    setId(e.target.value);
  }

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  }

  const showPasswordOnClickHandler = () => {
    setShowPassword(!showPassword);
  }

  const goBackButtonOnClickHandler = () => {
    navigate(-1);
  }

  const goAuthFindUserInfoOnClickHandler = () => {
    navigate('/auth/finduserInfo');
  }

  const goSignUpPageButtonOnClickHandler = () => {
    navigate('/auth/signup');
  }

  return (
    <>
      <RevertContainer>
        <FaChevronLeft onClick={goBackButtonOnClickHandler} />
      </RevertContainer>
      <SignInInputContainer>
        <SignInInputTitle>로그인</SignInInputTitle>
        <InputComponent 
          type="text"
          value={id}
          onChange={idOnChange}
          placeholder="아이디(이메일) 입력" 
        />
        <InputContainer>
          <InputComponent
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordOnChange} 
            placeholder="비밀번호 입력"
          />
          <PasswordViewer onClick={showPasswordOnClickHandler}>
            {
              showPassword ? <IoEyeSharp /> : <IoEyeOutline />
            }
          </PasswordViewer>
        </InputContainer>
        <SubContentTextContainer>
          <SubContentText onClick={goAuthFindUserInfoOnClickHandler}>
            로그인 정보를 잊으셨나요?
          </SubContentText>
        </SubContentTextContainer>
        <SubmitButtonComponent onClick={() => alert('로그인 버튼 클릭')} text="로그인" />
        <SubContentTextContainer>
          <SubContentText>
            아직 계정이 없으신가요?
          </SubContentText>
        </SubContentTextContainer>
        <SubmitButtonComponent onClick={goSignUpPageButtonOnClickHandler} text="회원가입" />
      </SignInInputContainer>
    </>
  )
}

export default AuthSignInPage;