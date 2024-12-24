import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 430px;
    box-sizing: border-box; /* 여백 포함 크기 계산 */
    padding: 10px 16px;
    height: 50px;
    display: flex;
    justify-content: left;
    align-items: center; 
    background-color: #fff;
    font-family: sans-serif;
    
`

export const Text = styled.span`
    
    h1 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        color: #000000;
    }
`
