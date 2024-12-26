import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70px;
    border-top: 1px solid #ccc;
    background-color: white;
`;

export const RouteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
`;

export const RouteButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: ${(props) => (props.focus ? '#3ebeee' : 'black')};
`;

export const Title = styled.div`
    margin-top: 5px;
    font-size: 14px;
`;