import styled from "styled-components";

export const Select = styled.select`
    appearance: none; 
    box-sizing: border-box;
    padding-left: 10px;
    width: 300px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    color: #777;
`;

export const Option = styled.option`
    &:checked {
        color: #000;
    }
`;