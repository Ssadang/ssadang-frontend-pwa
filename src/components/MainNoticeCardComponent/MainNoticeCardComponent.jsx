import React from 'react';
import { Container, Title } from './style';
import { FaCarrot } from "react-icons/fa6";
;
function MainNoticeCardComponent(props) {
  return (
    <Container onClick={props.onClick}>
      <FaCarrot />
      <Title>{props.text}</Title>
    </Container>
  );
}

export default MainNoticeCardComponent;