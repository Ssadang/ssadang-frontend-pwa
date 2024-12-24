import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SignUpTitleText = styled.div`
    font-size: 2em;
    font-weight: bold;
`;

export const SignUpTitleHighlightText = styled.span`
    color: #3ebeee;
`;

export const SignUpStageOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const RegexText = styled.span`
    width: 300px;
    font-weight: bold;
    ${(props) =>
        props.message?.type === 'ERROR' &&
        `
        color: red;
        `
    }
    ${(props) =>
        props.message === false &&
        `
        color: red;
        `
    }
    ${(props) =>
        props.message?.type === 'SUCCESS' &&
        `
        color: green;
        `
    }
    ${(props) =>
        props.message === true &&
        `
        color: green;
        `
    }
`

export const AuthTextContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 300px;
    color: #3ebeee;
`;

export const AuthText = styled.div`
    width: 90%;
    font-weight: bold;
    font-size: 1em;
    color: #000000;
`

export const AuthHighlightText = styled.span`
    color: #3ebeee;
`;