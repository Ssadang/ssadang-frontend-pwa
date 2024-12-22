import styled from "styled-components";

// Styled Components
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width : 430px;
  height: 50px; // 모바일 상단바 높이 예시
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  font-family: sans-serif;
`;

export const LeftContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
`;

export const SelectedRegion = styled.div`
  display: flex;
  flex-direction : row;
  width : 100px;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

export const ArrowDownWrapper = styled.div`
  margin-left : 7px;
  margin-top : -7px;
  width: 10px;
  height: 10px;
  svg {
    width: 100%;
    height: 100%;
    fill: #333;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  margin-top: 5px;
  border-radius: 4px;
  overflow: hidden;
  text-align : center;
  z-index : 50;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-left: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #333;
  }
`;