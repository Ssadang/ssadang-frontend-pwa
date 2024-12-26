import React, { useEffect, useState } from 'react';
import { Container, RouteButton, RouteContainer, Title } from './style';
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { PiShoppingBagLight, PiShoppingBagFill } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipses } from "react-icons/io5";
import { FaRegBell, FaBell } from "react-icons/fa6";
import { IoPersonCircleOutline, IoPersonCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  
  const [ focus, setFocus ] = useState({ // 기본 deafult home 활성화
    home: true,       // 홈 페이지
    trading: false,   // 거래 페이지
    chat: false,      // 채팅 페이지
    bell: false,      // 알림 페이지
    my: false,        // 마이 페이지
  });

  const RouteButtonOnClickHandler = (target) => {
    setFocus({
      home: target === 'home',
      trading: target === 'trading',
      chat: target === 'chat',
      bell: target === 'bell',
      my: target === 'my'
    })
  };

  useEffect(() => {
    if(focus.home) {
      navigate('/main');
    }else if(focus.trading) {
      navigate('/trading');
    }else if(focus.chat) {
      navigate('/chat');
    }else if(focus.bell) {
      navigate('/bell');
    }else if(focus.my) {
      navigate('/my');
    }
  }, [focus, navigate]);

  return (
    <Container>
      <RouteContainer>
        <RouteButton focus={focus.home} onClick={() => RouteButtonOnClickHandler('home')}>
          { !focus.home ? <IoHomeOutline /> : <IoHomeSharp />}
          <Title>홈</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton focus={focus.trading} onClick={() => RouteButtonOnClickHandler('trading')}>
          { !focus.trading ? <PiShoppingBagLight /> : <PiShoppingBagFill />}
          <Title>거래</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton focus={focus.chat} onClick={() => RouteButtonOnClickHandler('chat')}>
          { !focus.chat ?  <IoChatbubbleEllipsesOutline /> : <IoChatbubbleEllipses />}
          <Title>채팅</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton focus={focus.bell} onClick={() => RouteButtonOnClickHandler('bell')}>
          { !focus.bell ? <FaRegBell /> : <FaBell /> }
          <Title>알림</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton focus={focus.my} onClick={() => RouteButtonOnClickHandler('my')}>
          { !focus.my ? <IoPersonCircleOutline /> :  <IoPersonCircle /> }        
          <Title>마이 페이지</Title>
        </RouteButton>
      </RouteContainer>
    </Container>
  )
}

export default Footer;