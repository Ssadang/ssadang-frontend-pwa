import styled from "styled-components";

// Styled Components
export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    max-width : 430px;
    box-sizing: border-box; /* 여백 포함 크기 계산 */
    padding: 10px 16px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ isScrolled }) =>
        isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
    backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
    color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
    transition: background-color 0.3s, backdrop-filter 0.3s, color 0.3s;
`;

export const IconGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const Icon = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ isActive }) => (isActive ? '#000' : '#fff')}; /* 기본 색상 */
        transition: fill 0.3s;
    }

    &:hover svg {
        fill:rgb(73, 73, 73); /* 호버 시 색상 변경 */
    }
`;
