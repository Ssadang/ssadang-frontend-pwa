import React, { useEffect, useState } from 'react';
import { RevertContainer, SignUpInputContainer } from './style';
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SignUpComponent from '../../../components/SignUpComponent/SignUpComponent';

function AuthSignUpPage() {
  const navigate = useNavigate();

  const [ stage, setStage ] = useState(1);

  const [ inputValue, setInputValue ] = useState({
    // 회원가입 1
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    nickname: '',
    areaId: undefined,
    grade: undefined,
    // 회원가입 2
    emailAuthCode: '',
    proveImgUrl: null
  });

  const inputChange = (e) => {
    setInputValue({... inputValue, [e.target.name] : e.target.value});
  }

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue])

  const goBackButtonOnClickHandler = () => {
    navigate(-1);
  }

  return (
    <>
      <RevertContainer>
        <FaChevronLeft onClick={goBackButtonOnClickHandler} />
      </RevertContainer>
      <SignUpInputContainer>
        <SignUpComponent
          stage={stage}
          setStage={setStage}
          value={inputValue}
          onChange={inputChange}
        />
      </SignUpInputContainer>
    </>
  )
}

export default AuthSignUpPage;