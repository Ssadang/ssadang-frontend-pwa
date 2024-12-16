import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GlobalStyle, Logo, Title } from './style';
import splashLogo from '../../assets/SplashScreenPageImg/splash-logo.png'; 

function SplashScreenPage() {
    const navigator = useNavigate();

    const [ isSplash, setIsSplash ] = useState(true); // 애플리케이션 실행 시 무조건 1번 렌더링 되어야 함

    useEffect(() => {
        const timer = setTimeout(() => {
            // 사용자가 로그인 시 해당 SplashScreen -> Main
            // 사용자가 비로그인 시 해당 SplashScreen -> Auth
            setIsSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if(!isSplash) navigator('/auth', { replace: true }); // replace: true 는 뒤로가기 불가 설정(애플리케이션 실행 시 무조건 1번 렌더링)
    }, [isSplash, navigator]);

    return (
        <Container>
            <GlobalStyle />
            <Logo>
                <img src={splashLogo} alt="splashLogo" />
            </Logo>
            <Title>SSADANG</Title>
        </Container>
    )
}

export default SplashScreenPage;
