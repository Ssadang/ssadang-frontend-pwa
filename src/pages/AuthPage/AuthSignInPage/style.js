import styled from "styled-components";

export const RevertContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    height: 50px;
`;

export const SignInInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SignInInputTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
`;

export const InputContainer = styled.div`
    position: relative;
`
export const PasswordViewer = styled.div`
    position: absolute;
    top: calc(50% - 12px);
    right: 10px;
    font-size: 24px;
    color: #ccc;
    background-color: white;
`;

export const SubContentTextContainer = styled.div`
    color: #ccc;
    display: flex;
    justify-content: flex-start;
    width: 300px;
    font-size: 14px;
`;

export const SubContentText = styled.span``;