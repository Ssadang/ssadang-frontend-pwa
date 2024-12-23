import styled from "styled-components";

export const RevertContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    height: 50px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const TrandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 20px;
`;

export const TrandingProductListContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    font-size: 2em;
    font-weight: bold;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    height: 100%;  /* 아이콘과 텍스트가 세로로 맞도록 높이 맞추기 */
  line-height: 1;  /* 아이콘과 텍스트의 라인 높이 조정 */
  margin-right: 5px;  /* 아이콘과 텍스트 간의 간격 조정 */
    color: black;
`;

export const SubTitle = styled.div`
    font-size: 14px;
    color: #ccc;
`;

export const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const NoticeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;