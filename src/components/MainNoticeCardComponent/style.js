import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
`;

export const Title = styled.div`
    overflow: hidden;
    text-overflow : ellipsis;
    white-space: nowrap;
    font-size: 1em;
    font-weight: bold;
`;