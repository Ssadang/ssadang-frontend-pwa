import React, { useState } from 'react';
import { RevertContainer } from './style';
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import FindUserInfoComponent from '../../../components/FindUserInfoComponent/FindUserInfoComponent';

function AuthFindUserInfoPage() {
  const navigate = useNavigate();

  const [ cardState, setCardState ] = useState(false);
  const [ email, setEmail ] = useState('');

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }

  const goBackButtonOnClickHandler = () => {
    navigate(-1);
  }

  const validEmailButtonOnClickHandler = () => {
    alert('아이디 찾기 버튼 클릭');
  }

  const submitLinkButtonOnClickHandler = () => {
    alert('비밀번호 찾기 버튼 클릭');
  }

  return (
    <>
      <RevertContainer>
        <FaChevronLeft onClick={goBackButtonOnClickHandler} />
      </RevertContainer>
      <FindUserInfoComponent 
        cardState={cardState} 
        setCardState={setCardState} 
        onClick={!cardState ? validEmailButtonOnClickHandler : submitLinkButtonOnClickHandler}
        value={email}
        onChange={emailOnChange} 
      />
    </>
  )
}

export default AuthFindUserInfoPage;