import styled from "styled-components";

export const Container = styled.div`
    position : relative;
    width: 100%;
    max-width : 430px;
    box-sizing: border-box; /* 여백 포함 크기 계산 */
    padding: 10px 10px;
    height : 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom : 1px solid #d9d9d9;
    background-color : #fff;
    font-family: sans-serif;
`;

export const LeftContainer = styled.div`
    display : flex;
    align-items: center;
    width : 40%;
    gap : 10px;
`;

export const Text = styled.span`
    width : 100%;
    font-size : 18px;
    font-weight : bold;
    color : #333;
`

export const UserImg = styled.img`
    width:38%;
    height:38%;
    border-radius:50%;
    object-fit : cover;
    margin : auto;
`

export const RightContainer = styled.div`
    display : flex;
    align-items : center;
    
`;

export const Emoji = styled.span`
    font-size : 20px;
`


