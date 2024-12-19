import React from 'react';
import { SignUpContainer, SignUpStageOneContainer, SignUpTitleHighlightText, SignUpTitleText } from './style';
import InputComponent from '../InputComponent/InputComponent';
import SelectComponent from '../SelectComponent/SelectComponent';
import SubmitButtonComponent from '../SubmitButtonComponent/SubmitButtonComponent';
import { AREAID } from '../../constants/areaId';
import { GRADE } from '../../constants/grade';


function SignUpComponent(props) {
  return (
    <SignUpContainer>
        <SignUpTitleText>
            회원가입&nbsp;
            <SignUpTitleHighlightText>{props.stage}</SignUpTitleHighlightText>
            /3
        </SignUpTitleText>
        <SignUpStageOneContainer>
            <InputComponent
                type='text'
                name='email'
                value={props.value.email}
                onChange={props.onChange}
                placeholder='이메일 계정 입력'
            />
            <InputComponent
                type='password'
                name='password'
                value={props.value.password}
                onChange={props.onChange}
                placeholder='비밀번호 입력' 
            />
            <InputComponent 
                type='password'
                name='passwordCheck' 
                value={props.value.passwordCheck}
                onChange={props.onChange}
                placeholder='비밀번호 확인' 
            />
            <InputComponent 
                type='text'
                name='name'
                value={props.value.name}
                onChange={props.onChange}
                placeholder='이름 입력'
            />
            <InputComponent 
                type='text'
                name='nickname'
                value={props.value.nickname}
                onChange={props.onChange}
                placeholder='닉네임 입력'
            />
            <SelectComponent name='areaId' value={props.value.areaId} onChange={props.onChange} options={AREAID} placeholder='캠퍼스 선택' />
            <SelectComponent name='areaId' value={props.value.grade} onChange={props.onChange} options={GRADE} placeholder='기수 선택' />
            <SubmitButtonComponent text='다음'/>
        </SignUpStageOneContainer>
    </SignUpContainer>
  )
}

export default SignUpComponent;