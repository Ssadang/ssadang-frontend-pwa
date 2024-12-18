import styled from "styled-components";

export const FindUserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const TitleText = styled.div`
    color: ${(props) => (props.checked  ? '#3ebeee' : '#000000')};
    font-size: 2em;
    font-weight: bold;
`;

export const ContentText = styled.span`
    color: #ccc;
`;