import React, { useState } from 'react';
import { ContentText, FindUserInfoContainer, TitleContainer, TitleText } from './style';
import InputComponent from '../InputComponent/InputComponent';
import SubmitButtonComponent from '../SubmitButtonComponent/SubmitButtonComponent';

function FindUserInfoComponent(props) {

  const [ findEmail, setFindEmail ] = useState(true);
  const [ findPassword, setFindPassword ] = useState(false);

  const findEmailButtonOnClickHandler = () => {
    props.setCardState(false);
    setFindEmail(true);
    setFindPassword(false);
  }

  const findPasswordButtonOnClickHandler = () => {
    props.setCardState(true);
    setFindEmail(false);
    setFindPassword(true);
  }

  return (
    <FindUserInfoContainer>
      <TitleContainer>
        <TitleText checked={findEmail} onClick={findEmailButtonOnClickHandler}>아이디 찾기</TitleText>
        <TitleText checked={findPassword} onClick={findPasswordButtonOnClickHandler}>비밀번호 찾기</TitleText>
      </TitleContainer>
      {
        !props.cardState ?
        <ContentText>
          SSADANG 은 이메일로 아이디로 사용합니다.<br/>
          소유하고 계신 계정을 입력해보세요.<br/>
          가입여부를 확인해 드립니다.
        </ContentText> :
        <ContentText>
          가입하셨던 이메일 계정을 입력하시면,<br/>
          비밀번호를 새로 만들 수 있는 링크를 이메일로<br/>
          발송해드립니다.
        </ContentText>
      }
      <InputComponent type='text' value={props.value} onChange={props.onChange} placeholder='아이디(이메일) 입력' />
      <SubmitButtonComponent text={!props.cardState ? '확인' : '링크 발송'} onClick={props.onClick} />
    </FindUserInfoContainer>
  )
}

export default FindUserInfoComponent;