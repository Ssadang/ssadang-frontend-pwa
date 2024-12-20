import React, { useEffect, useState } from 'react';
import { AuthHighlightText, AuthText, AuthTextContainer, RegexText, SignUpContainer, SignUpStageOneContainer, SignUpTitleHighlightText, SignUpTitleText } from './style';
import InputComponent from '../InputComponent/InputComponent';
import SelectComponent from '../SelectComponent/SelectComponent';
import SubmitButtonComponent from '../SubmitButtonComponent/SubmitButtonComponent';
import { AREAID } from '../../constants/areaId';
import { GRADE } from '../../constants/grade';
import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { FaCarrot } from "react-icons/fa6";

function SignUpComponent(props) {
    const navigate = useNavigate();

    const [ buttonText, setButtonText ] = useState('');

    // 유효성 검사(Stage 1)
    const emailRegex = useInput('email');
    const passwordRegex = useInput('password');
    const [ passwordCheckFlag, setPasswordCheckFlag ] = useState(false);
    const [ passwordCheckMessage, setPasswordCheckMessage ] = useState(null);
    const nameRegex = useInput('name');
    const nicknameRegex = useInput('nickname');
    const [ areaIdFlag, setAreaIdFlag ] = useState(false);
    const [ areaIdMessage, setAreaIdMessage ] = useState(null);
    const [ gradeFlag, setGradeFlag ] = useState(false);
    const [ gradeMessage, setGradeMessage ] = useState(null);

    // 인증(Stage 2)
    const [ emailAuthCodeCheckFlag, setEmailAuthCodeCheckFlag ] = useState(false);

    const submitButtonOnClickHandler = () => {
        if(props.stage === 1) {
            if(
                emailRegex.message?.type === 'SUCCESS' &&
                passwordRegex.message?.type === 'SUCCESS' &&
                passwordCheckFlag &&
                nameRegex.message?.type === 'SUCCESS' &&
                areaIdFlag &&
                gradeFlag
            ) {
                props.setStage(2);
                alert('2단계로 갑시다.');
            }else {
                alert('회원가입 정보를 다시 확인해주세요.');
            }
        } else if(props.stage === 2) {
            console.log(emailAuthCodeCheckFlag);
            console.log(props.value.proveImgUrl);
            
            if(
                emailAuthCodeCheckFlag &&
                props.value.proveImgUrl
            ) {
                props.setStage(3);
                alert('3단계로 갑시다.');
            }else {
                alert('회원가입 정보를 다시 확인해주세요.');
            }
        } else if(props.stage === 3) {
            navigate('/auth/signin');
        }
    }

    const authCodeCheckButtonOnClickHandler = () => {
        console.log(props.value.emailAuthCode);
        if(!props.value.emailAuthCode) {
            setEmailAuthCodeCheckFlag(false);
            alert('인증 코드를 입력해주세요.')
            return;
        }else {
            // 인증코드가 일치할 때
            alert('인증 완료되었습니다.');
            setEmailAuthCodeCheckFlag(true);
            // 인증코드가 일치하지 않을 때
        }
    }

    useEffect(() => {
        if(props.stage === 3) {
            setButtonText('로그인하러 가기');
        }else {
            setButtonText('다음');
        }
    }, [props.stage])

    useEffect(() => {
        if(!props.value.passwordCheck) {
            setPasswordCheckFlag(false);
            setPasswordCheckMessage(null);
            return;
        }
        if(props.value.password === props.value.passwordCheck) {
            setPasswordCheckMessage('비밀번호가 서로 일치합니다.');
            setPasswordCheckFlag(true);
        }else {
            setPasswordCheckMessage('비밀번호가 서로 일치하지 않습니다.');
            setPasswordCheckFlag(false);
        }
    }, [props.value.password , props.value.passwordCheck]);

    useEffect(() => {
        if(props.value.areaId === undefined) {
            setAreaIdFlag(false);
            setAreaIdMessage('캠퍼스를 선택해 주세요.');
        }else {
            setAreaIdFlag(true);
            setAreaIdMessage(null);
        }
    }, [props.value.areaId]);

    useEffect(() => {
        if(props.value.grade === undefined) {
            setGradeFlag(false);
            setGradeMessage('캠퍼스를 선택해 주세요.');
        }else {
            setGradeFlag(true);
            setGradeMessage(null);
        }
    }, [props.value.grade]);

    return (
        <SignUpContainer>
            <SignUpTitleText>
                회원가입&nbsp;
                <SignUpTitleHighlightText>{props.stage}</SignUpTitleHighlightText>
                /3
            </SignUpTitleText>
            <SignUpStageOneContainer>
                {
                    props.stage === 1 ?  
                    (
                        <>
                            <InputComponent
                                type='text'
                                name='email'
                                value={props.value.email}
                                onChange={(e) => {
                                    props.onChange(e);
                                    emailRegex.onChangeHandler(e);
                                }}
                                placeholder='이메일 계정 입력'
                            />
                            {emailRegex.message && <RegexText message={emailRegex.message}>{emailRegex.message.text}</RegexText>}
                            <InputComponent
                                type='password'
                                name='password'
                                value={props.value.password}
                                onChange={(e) => {
                                    props.onChange(e);
                                    passwordRegex.onChangeHandler(e);
                                }}
                                placeholder='비밀번호 입력' 
                            />
                            {passwordRegex.message && <RegexText message={passwordRegex.message}>{passwordRegex.message.text}</RegexText>}
                            <InputComponent 
                                type='password'
                                name='passwordCheck' 
                                value={props.value.passwordCheck}
                                onChange={props.onChange}
                                placeholder='비밀번호 확인' 
                            />
                            {passwordCheckMessage && <RegexText message={passwordCheckFlag}>{passwordCheckMessage}</RegexText>}
                            <InputComponent 
                                type='text'
                                name='name'
                                value={props.value.name}
                                onChange={(e) => {
                                    props.onChange(e);
                                    nameRegex.onChangeHandler(e);
                                }}
                                placeholder='이름 입력'
                            />
                            {nameRegex.message && <RegexText message={nameRegex.message}>{nameRegex.message.text}</RegexText>}
                            <InputComponent 
                                type='text'
                                name='nickname'
                                value={props.value.nickname}
                                onChange={(e) => {
                                    props.onChange(e);
                                    nicknameRegex.onChangeHandler(e);
                                }}
                                placeholder='닉네임 입력'
                            />
                            {nicknameRegex.message && <RegexText message={nicknameRegex.message}>{nicknameRegex.message.text}</RegexText>}
                            <SelectComponent 
                                name='areaId' 
                                value={props.value.areaId} 
                                onChange={props.onChange} 
                                options={AREAID} 
                                placeholder='캠퍼스 선택' 
                            />
                            <SelectComponent 
                                name='grade' 
                                value={props.value.grade} 
                                onChange={props.onChange} 
                                options={GRADE} 
                                placeholder='기수 선택' 
                            />
                        </>
                    ) : props.stage === 2 ?
                    (
                        <>
                            <AuthTextContainer>
                                <FaCarrot />
                                <AuthText>이메일에 인증 코드를 전송하였습니다.</AuthText>
                            </AuthTextContainer>
                            <InputComponent
                                type='text'
                                name='emailAuthCode'
                                value={props.value.emailAuthCode}
                                onChange={props.onChange}
                            />
                            <SubmitButtonComponent onClick={authCodeCheckButtonOnClickHandler} text='인증코드 확인' />
                            <AuthTextContainer>
                                <FaCarrot />
                                <AuthText>SSAFY 인증 이미지를 첨부해주세요.</AuthText>
                            </AuthTextContainer>
                            <InputComponent
                                type='file'
                                name='proveImgUrl'
                                value={props.value.proveImgUrl}
                                onChange={props.onChange}
                            />
                        </>
                    ) : 
                    <>
                        <AuthTextContainer>
                            <FaCarrot />
                            <AuthText>성공적으로 회원가입 되셨습니다.</AuthText>
                        </AuthTextContainer>
                        <AuthTextContainer>
                            <FaCarrot />
                            <AuthText>
                                현재 회원님의 권한은 <AuthHighlightText>임시 사용자</AuthHighlightText> 입니다.
                                관리자가 회원님의 SSAFY 인증을 허가하게 되면 자동으로 권한이 <AuthHighlightText>일반 사용자</AuthHighlightText>로 바뀌게 됩니다.
                            </AuthText>
                        </AuthTextContainer>
                        <AuthTextContainer>
                            <FaCarrot />
                            <AuthText>
                                <AuthHighlightText>임시 사용자</AuthHighlightText>
                                의 권한은 마이페이지 수정, 컨텐츠 보기만 가능합니다.
                            </AuthText>
                        </AuthTextContainer>
                        
                    </>
                }
                <SubmitButtonComponent onClick={submitButtonOnClickHandler} text={buttonText} />
            </SignUpStageOneContainer>
        </SignUpContainer>
    )
} 

export default SignUpComponent;