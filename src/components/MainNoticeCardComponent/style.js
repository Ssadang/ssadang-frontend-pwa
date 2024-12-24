import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 10px;
    overflow: hidden;
    width: 100%;
    font-weight: bold;
    color: #3ebeee;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    overflow: hidden;
    text-overflow : ellipsis;
    white-space: nowrap;
    height: 20px;
    line-height: 20px;
    color: black;
`;