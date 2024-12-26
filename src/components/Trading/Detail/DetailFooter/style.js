import styled from "styled-components";

// Styled Components
export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 430px; /* PWA에 맞춘 최대 너비 */
    height: 60px; /* Footer 높이 */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: #fff;
    box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);
    box-sizing : border-box;
    z-index: 10;
`;

export const IconSection = styled.div`
    display: flex;
    align-items: center;
`;

export const HeartIcon = styled.div.attrs(() => ({
    // DOM에 전달되지 않도록 필터링
    "data-testid": "heart-icon",
}))`
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: ${({ isLiked }) => (isLiked ? "red" : "#aaa")}; /* 초기 색상 */
    cursor: pointer;
    padding : 10px;
    transition : color 0.3s ease;
`;

export const TextSection = styled.div`
    flex: 1; /* 남은 공간을 차지 */
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .price {
        font-size: 16px;
        font-weight: 900;
        color: #3EBEEE;
        margin: 0;
    }

    .note {
        font-size: 12px;
        color: #888;
        margin: 0;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    gap: 8px; /* 버튼 간 간격 */
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &.join {
        background-color: ${({ disabled }) =>
        disabled ? "#ccc" : "#3EBEEE"}; /* 비활성화 색상 처리 */
        color: ${({ disabled }) => (disabled ? "#666" : "#fff")};
        pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    }

    &.chat {
        background-color: #3EBEEE;
        color: #fff;
    }
`;