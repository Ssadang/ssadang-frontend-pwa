import React from 'react';
import { Container, NoticeContainer, NoticeListContainer, RevertContainer, SubTitle, Title, TitleContainer, TrandingContainer, TrandingProductListContainer } from './style';
import { useNavigate } from 'react-router-dom';
import MainTrandingProductCardComponent from '../../components/MainTrandingProductCardComponent/MainTrandingProductCardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { FaChevronLeft } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SubmitButtonComponent from '../../components/SubmitButtonComponent/SubmitButtonComponent';
import MainNoticeCardComponent from '../../components/MainNoticeCardComponent/MainNoticeCardComponent';

function MainPage() {
  const navigate = useNavigate();

  const goBackButtonOnClickHandler = () => {
    navigate(-1);
  }

  const tradingProductOnClickHandler = () => {
    alert('해당 거래 상세 페이지으로 이동합니다.');
  }

  const goTradingButtonOnClickHandler = () => {
    alert('거래 더보기 버튼 클릭');
  }

  const noticeDetailOnClickHander = () => {
    alert('해당 공지사항 상세 페이지로 이동합니다.')
  }

  const goNoticeButtonOnClickHandler = () => {
    alert('공지사항 더보기 버튼 클릭')
  }

  return (
    <>
      <RevertContainer>
        <FaChevronLeft onClick={goBackButtonOnClickHandler} />
      </RevertContainer>
      <Container>
        <TrandingContainer>
          <TitleContainer>
            <Title>최신 거래</Title>
            <PiEyesFill/>
          </TitleContainer>
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
          <TitleContainer>
            <Title>최신 공지사항</Title>
          </TitleContainer>
          <NoticeListContainer>
            {/* 공지사항 등록 최신순 5개 preview */}
            <MainNoticeCardComponent onClick={noticeDetailOnClickHander} text='고양이 장패드 팔아요' />
            <MainNoticeCardComponent onClick={noticeDetailOnClickHander} text='고양이 장패드 팔아요' />
            <MainNoticeCardComponent onClick={noticeDetailOnClickHander} text='고양이 장패드 팔아요' />
            <MainNoticeCardComponent onClick={noticeDetailOnClickHander} text='고양이 장패드 팔아요' />
            <MainNoticeCardComponent onClick={noticeDetailOnClickHander} text='고양이 장패드 팔아요' />
          </NoticeListContainer>
          <SubTitle>공지사항이 더 궁금하신가요?</SubTitle>
          <SubmitButtonComponent onClick={goNoticeButtonOnClickHandler} text='공지사항 더보기' />
        </NoticeContainer>
      </Container>
    </>
  )
}

export default MainPage;