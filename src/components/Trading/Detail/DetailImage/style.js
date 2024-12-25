import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    max-width : 430px;
    height: 50%;
    overflow: hidden; /* 넘치는 이미지 숨기기 */
    box-sizing: border-box; /* 여백 포함 크기 계산 */
    display: flex;
`;

export const SlideTrack = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "currentIndex",
})`
  display: flex;
  transition: transform 0.3s ease-in-out;

  ${({ currentIndex }) =>
        css`
      transform: translateX(-${currentIndex * 100}%);
    `}
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0; /* 이미지가 줄어들지 않도록 고정 */
`;

export const Pagination = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
`;

export const Dot = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isActive",
})`
    width: 10px;
    height: 10px;
    background-color: ${({ isActive }) => (isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
    border-radius: 50%;
    transition: background-color 0.3s;
`;