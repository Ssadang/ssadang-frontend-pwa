import React, { useEffect, useState } from 'react';
import { RevertContainer, SignUpInputContainer } from './style';
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SignUpComponent from '../../../components/SignUpComponent/SignUpComponent';
import { useMutation } from '@tanstack/react-query';
import { authPostEmailCheck, authPostSendEmail } from '../../../apis/api/auth/auth';

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
    proveImg: undefined
  });

  const inputChange = (e) => {
    setInputValue({... inputValue, [e.target.name] : e.target.value});
  }

  // 이메일 인증 코드
  const authEmailCode = useMutation({
    mutationKey: 'authEmailCode',
    mutationFn: authPostSendEmail,
    onSuccess: response => {
      alert('해당 이메일로 인증코드가 발송되었습니다.');
    },
    onError: error => {
      alert('오류가 발생하였습니다. 해당 서비스를 다시 이용해 주세요');
      console.log(error);
    }
  });

  

  useEffect(() => {
    if(stage == 2) {
      authEmailCode.mutate({email : `${inputValue.email}`});
    }
  }, [stage]);

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