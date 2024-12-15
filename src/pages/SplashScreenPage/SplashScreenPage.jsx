import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GlobalStyle, Logo, Title } from './style';
import splashLogo from '../../assets/SplashScreenPageImg/splash-logo.png'; 

function SplashScreenPage() {
    const navigator = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigator]);

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
