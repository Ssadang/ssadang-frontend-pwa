import styled from "styled-components";

// 전체 카드 리스트 컨테이너
export const CardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* 가로로 정렬 후 공간이 부족하면 줄바꿈 */
    width: 100%; /* 전체 너비 */
    gap: 10px; /* 카드 간 간격 */
    padding: 10px;
    box-sizing: border-box;
    height : auto;
`;

// 개별 카드
export const Card = styled.div`
    width: calc(50% - 10px); /* 50% - 간격 */
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: center;
    background-color: #fff; /* 카드 배경색 */
    border: 1px solid #d9d9d9; /* 카드 테두리 */
    border-radius: 10px; /* 모서리 둥글게 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    overflow: hidden; /* 내용이 넘치지 않도록 처리 */
    cursor : pointer;
`;

// 이미지 스타일
export const CardImage = styled.img`
    width: 100%; /* 카드의 전체 너비 */
    height: 120px; /* 고정 높이 */
    object-fit: cover; /* 이미지 크기 조정 */
`;

// 제목 스타일
export const CardTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin: 10px 0 5px 0; /* 위아래 간격 조정 */
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis; /* 길 경우 말줄임 */
    white-space: nowrap;
`;

// 가격 스타일
export const CardPrice = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    text-align: center;
`;

export const NoItemsMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #777;
    padding: 20px 0;
`;
