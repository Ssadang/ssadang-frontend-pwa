import React from "react";
import { useState, useEffect } from 'react';
import { RouteButton, Title, Container, RouteContainer } from './style';
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { PiShoppingBagLight, PiShoppingBagFill } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipses } from "react-icons/io5";
import { FaRegBell, FaBell } from "react-icons/fa6";
import { IoPersonCircleOutline, IoPersonCircle } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [focus, setFocus] = useState({ 
    home: '',       
    trading: '',   
    chat: '',      
    bell: '',      
    my: '',        
  });

  const RouteButtonOnClickHandler = (target) => {
    setFocus({
      home: target === 'home' ? 'active' : '',
      trading: target === 'trading' ? 'active' : '',
      chat: target === 'chat' ? 'active' : '',
      bell: target === 'bell' ? 'active' : '',
      my: target === 'my' ? 'active' : '',
    });
    navigate(`/${target}`);
  };

  useEffect(() => {
    if(location.pathname.startsWith('/home')) {
      setFocus({
        home: 'active',       
        trading: '',   
        chat: '',      
        bell: '',      
        my: '', 
      });
    }else if(location.pathname.startsWith('/trading')) {
      setFocus({
        home: '',       
        trading: 'active',   
        chat: '',      
        bell: '',      
        my: '', 
      })
    }else if(location.pathname.startsWith('/chat')) {
      setFocus({
        home: '',       
        trading: '',   
        chat: 'active',      
        bell: '',      
        my: '', 
      })
    }else if(location.pathname.startsWith('/bell')) {
      setFocus({
        home: '',       
        trading: '',   
        chat: '',      
        bell: 'active',      
        my: '', 
      })
    }else if(location.pathname.startsWith('/my')) {
      setFocus({
        home: '',       
        trading: '',   
        chat: '',      
        bell: '',      
        my: 'active', 
      })
    }
  }, [location]);

  return (
    <Container>
      <RouteContainer>
        <RouteButton 
          className={focus.home} 
          onClick={() => RouteButtonOnClickHandler('home')}
        >
          { focus.home === '' ? <IoHomeOutline /> : <IoHomeSharp />}
          <Title>홈</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton 
          className={focus.trading} 
          onClick={() => RouteButtonOnClickHandler('trading')}
        >
          { focus.trading === '' ? <PiShoppingBagLight /> : <PiShoppingBagFill />}
          <Title>거래</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton 
          className={focus.chat} 
          onClick={() => RouteButtonOnClickHandler('chat')}
        >
          { focus.chat === '' ? <IoChatbubbleEllipsesOutline /> : <IoChatbubbleEllipses />}
          <Title>채팅</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton 
          className={focus.bell} 
          onClick={() => RouteButtonOnClickHandler('bell')}
        >
          { focus.bell === '' ? <FaRegBell /> : <FaBell />}
          <Title>알림</Title>
        </RouteButton>
      </RouteContainer>
      <RouteContainer>
        <RouteButton 
          className={focus.my} 
          onClick={() => RouteButtonOnClickHandler('my')}
        >
          { focus.my === '' ? <IoPersonCircleOutline /> : <IoPersonCircle />}
          <Title>마이 페이지</Title>
        </RouteButton>
      </RouteContainer>
    </Container>
  );
}

export default Footer;
