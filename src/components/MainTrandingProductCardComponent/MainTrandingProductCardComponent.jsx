import React from 'react';
import { AreaIdText, Container, ContentText, ProductImgContainer } from './style';

function MainTrandingProductCardComponent(props) {
  return (
    <Container onClick={props.onClick}>
        <ProductImgContainer>
            <img src={props.productImgUrl} alt="productImg" />
            <AreaIdText>
                {props.areaId}            
            </AreaIdText>
        </ProductImgContainer>
        <ContentText>
            {props.description}
        </ContentText>
    </Container>
  )
}

export default MainTrandingProductCardComponent;