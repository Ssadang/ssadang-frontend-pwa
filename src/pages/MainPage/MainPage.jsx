import React from 'react';
import { Container, NoticeContainer, Title, TrandingContainer, TrandingProductListContainer } from './style';
import { useNavigate } from 'react-router-dom';
import MainTrandingProductCardComponent from '../../components/MainTrandingProductCardComponent/MainTrandingProductCardComponent';

function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <TrandingContainer>
        <Title>최신</Title>
        <TrandingProductListContainer>
          <MainTrandingProductCardComponent 
          productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
          description='고양이 장패드 팔아요'
          areaId='부울경' 
          />
          <MainTrandingProductCardComponent 
          productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
          description='고양이 장패드 팔아요'
          areaId='부울경' 
          />
          <MainTrandingProductCardComponent 
          productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
          description='고양이 장패드 팔아요'
          areaId='부울경' 
          />
          <MainTrandingProductCardComponent 
          productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
          description='고양이 장패드 팔아요'
          areaId='부울경' 
          />
          <MainTrandingProductCardComponent 
          productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
          description='고양이 장패드 팔아요'
          areaId='부울경' 
          />
        </TrandingProductListContainer>
      </TrandingContainer>
      <NoticeContainer>
        <Title>최신 공지사항</Title>
      </NoticeContainer>
    </Container>
  )
}

export default MainPage;