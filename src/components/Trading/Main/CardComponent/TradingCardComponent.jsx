import React from 'react';
import {
    ProductButton,
    ProductIconSection,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductLocationDateTime,
    ProductPrice,
    IconImg,
    ChatNumber,
    HeartNumber,
    GameButton,
} from './style';
import HeartImg from '../../../../assets/icons/heart.svg';
import ChatImg from '../../../../assets/icons/chat.svg';
import { useNavigate } from 'react-router-dom';
import { getRelativeTime } from '../../../../constants/Util/date';

function CardComponent({ product }) {
    const {
        imageSrc,
        title,
        location,
        dateTime,
        price,
        chatCount,
        heartCount,
        isGame,
        currentParticipants,
        maxParticipants,
    } = product;


    //게임 버튼 활성화 여부 판단하는 함수 
    const isFull = maxParticipants > 0 && currentParticipants >= maxParticipants;

    const navigate = useNavigate(); // React Router의 네비게이션 훅
    const handleClick = () => {
        navigate(`/product/${product.id}`);
    }



    return (
        <ProductButton onClick={handleClick}>
            <ProductImg src={imageSrc} alt={title} />
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductLocationDateTime>{location} · {getRelativeTime(dateTime)}</ProductLocationDateTime>
                <ProductPrice>{price ? price : "무료 나눔"}</ProductPrice>
                {isGame ? (
                    <GameButton isFull={isFull} disabled={isFull}>
                        {isFull ? "선착순 마감" : "참여하기"}
                    </GameButton>
                ) : (
                    <ProductIconSection>
                        <IconImg src={ChatImg} alt="chat icon" />
                        <ChatNumber>{chatCount}</ChatNumber>
                        <IconImg src={HeartImg} alt="heart icon" />
                        <HeartNumber>{heartCount}</HeartNumber>
                    </ProductIconSection>
                )}
            </ProductInfo>
        </ProductButton>
    );
}

export default CardComponent;
