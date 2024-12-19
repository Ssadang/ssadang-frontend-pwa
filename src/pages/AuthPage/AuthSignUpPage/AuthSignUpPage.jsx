import React, { useState } from 'react';
import { RevertContainer, SignUpInputContainer } from './style';
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SignUpComponent from '../../../components/SignUpComponent/SignUpComponent';

function AuthSignUpPage() {
  const navigate = useNavigate();

  // 회원가입 1
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordCheck, setPasswordCheck ] = useState('');
  const [ name, setName ] = useState('');
  const [ nickname, setNickname ] = useState('');
  const [ location, setLocation ] = useState(null); // select
  const [ semester, setSemester ] = useState(null); // select

  // 회원가입 2
  const [ emailAuthCode, setEmailAuthCode ] = useState('');
  const [ authImg, setAuthImg ] = useState(null);
  

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
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordCheck={passwordCheck}
          setPasswordCheck={setPasswordCheck}
          name={name}
          setName={setName}
          nickname={nickname}
          setNickname={setNickname}
          location={location}
          setLocation={setLocation}
          semester={semester}
          setSemester={setSemester}
          emailAuthCode={emailAuthCode}
          setEmailAuthCode={setEmailAuthCode}
          authImg={authImg}
          setAuthImg={setAuthImg}
        />
      </SignUpInputContainer>
    </>
  )
}

export default AuthSignUpPage;