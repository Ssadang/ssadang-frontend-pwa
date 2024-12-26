import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
    width: 100%;
    max-width: 430px;
    flex : 1;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    border-bottom : 1px solid #d9d9d9;
`;

// 제목, 카테고리, 날짜
export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        color: #333;
    }

    span {
        font-size: 14px;
        color: #888;
    }
`;

// 제품 설명
export const DescriptionSection = styled.div`
    flex: 1;
    font-size: 16px;
    color: #444;
    line-height: 1.5;
    overflow-y: auto;
`;

// 관심 수 및 조회 수
export const StatsSection = styled.div`
    display: flex;

    align-items: center;
    gap : 4px;

    .stat {
        font-size: 14px;
        color: #888;

        span {
            font-weight: bold;
            color: #888;
        }
    }
`;
