import React from 'react';
import { Container, NoticeContainer, NoticeListContainer, SubTitle, Title, TrandingContainer, TrandingProductListContainer } from './style';
import { useNavigate } from 'react-router-dom';
import MainTrandingProductCardComponent from '../../components/MainTrandingProductCardComponent/MainTrandingProductCardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SubmitButtonComponent from '../../components/SubmitButtonComponent/SubmitButtonComponent';
import MainNoticeCardComponent from '../../components/MainNoticeCardComponent/MainNoticeCardComponent';

function MainPage() {
  const navigate = useNavigate();

  const tradingProductOnClickHandler = () => {
    alert('해당 상세 거래 게시판으로 이동합니다.');
  }

  const goTradingButtonOnClickHandler = () => {
    alert('거래 더 보기 버튼 클릭');
  }

  return (
    <Container>
      <TrandingContainer>
        <Title>최신</Title>
        <TrandingProductListContainer>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {/* 거래 등록 최신순 5개 preview */}
            <SwiperSlide>
              <MainTrandingProductCardComponent
                productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
                description='고양이 장패드 팔아요'
                areaId='부울경' 
                onClick={tradingProductOnClickHandler}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainTrandingProductCardComponent
                productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
                description='고양이 장패드 팔아요'
                areaId='부울경' 
                onClick={tradingProductOnClickHandler}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainTrandingProductCardComponent
                productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
                description='고양이 장패드 팔아요'
                areaId='부울경' 
                onClick={tradingProductOnClickHandler}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainTrandingProductCardComponent
                productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
                description='고양이 장패드 팔아요'
                areaId='부울경' 
                onClick={tradingProductOnClickHandler}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainTrandingProductCardComponent
                productImgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFAGnSM9DNWSnByaJeBC3QFct5qH0oX8DQ&s'} 
                description='고양이 장패드 팔아요'
                areaId='부울경' 
                onClick={tradingProductOnClickHandler}
              />
            </SwiperSlide>
          </Swiper>
        </TrandingProductListContainer>
        <SubTitle>캠퍼스별 거래가 더 궁금하신가요?</SubTitle>
        <SubmitButtonComponent onClick={goTradingButtonOnClickHandler} text='거래 더보기' />
      </TrandingContainer>
      <NoticeContainer>
        <Title>최신 공지사항</Title>
        <NoticeListContainer>
          <MainNoticeCardComponent />

        </NoticeListContainer>
        <SubTitle>공지사항이 더 궁금하신가요?</SubTitle>
        <SubmitButtonComponent onClick={goTradingButtonOnClickHandler} text='공지사항 더보기' />
      </NoticeContainer>
    </Container>
  )
}

export default MainPage;