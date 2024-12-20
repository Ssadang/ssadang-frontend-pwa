import styled from "styled-components";

export const Input = styled.input`
    box-sizing: border-box;
    padding: 10px;
    width: 300px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    color: #000000;

    ${(props) =>
        props.type === 'file' &&
        `
        display: none;
        `
    }
`;

export const FileLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 250px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 8em;
    color: #3ebeee;
`;

export const FilePreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 250px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export const FilePreviewImg = styled.img`
    height: 250px;
`