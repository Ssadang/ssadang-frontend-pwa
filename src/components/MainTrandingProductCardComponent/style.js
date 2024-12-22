import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
    overflow: hidden;
    width: 150px;
    height: 200px;
    border-radius: 10px;
`;

export const ProductImgContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    & > img {
        width: 100%;
        height: 100%;
    }
`

export const AreaIdText = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 1em;
    font-weight: bold;
    color: #3ebeee;
`

export const ContentText = styled.div`
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 50px;
    overflow: hidden;
    text-overflow : ellipsis;
    white-space: nowrap;
    border: 1px solid #ccc;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;