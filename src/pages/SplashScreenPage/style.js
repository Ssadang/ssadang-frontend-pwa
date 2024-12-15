import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @-webkit-keyframes bounce-in-top {
        0% {
            -webkit-transform: translateY(-500px);
                    transform: translateY(-500px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: translateY(-65px);
                    transform: translateY(-65px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: translateY(-28px);
                    transform: translateY(-28px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        90% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: translateY(-8px);
                    transform: translateY(-8px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
    @keyframes bounce-in-top {
        0% {
            -webkit-transform: translateY(-500px);
                    transform: translateY(-500px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: translateY(-65px);
                    transform: translateY(-65px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: translateY(-28px);
                    transform: translateY(-28px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        90% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: translateY(-8px);
                    transform: translateY(-8px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
    @keyframes text-focus-in{
        0% {
            filter:blur(12px);opacity:0}
        100% {
            filter:blur(0);opacity:1;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Logo = styled.div`
    animation: bounce-in-top 1.1s both;
`;

export const Title = styled.div`
    animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both;
    animation-delay: 1.1s;
    font-size: 4em;
    font-weight: bold;
    color: #3ebeee;
`;