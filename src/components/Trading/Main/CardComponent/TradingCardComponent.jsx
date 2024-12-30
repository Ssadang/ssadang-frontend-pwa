import React, { useState } from 'react';
import {
    ProductContainer,
    ProductContent,
    ProductIconSection,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductLocationDateTime,
    ProductPrice,
    IconImg,
    ChatNumber,
    HeartNumber,
    GameButtonWrapper,
    GameButton,
} from './style';
import ModalComponent from '../../Modal/Detail/ModalComponent';
import HeartImg from '../../../../assets/icons/heart.svg';
import ChatImg from '../../../../assets/icons/chat.svg';
import { useNavigate } from 'react-router-dom';
import { getRelativeTime } from '../../../../constants/Util/date';

function CardComponent({ product, onRefresh = () => { } }) {
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

    const isFull = maxParticipants > 0 && currentParticipants >= maxParticipants;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trading/detail/${product.id}`);
    };

    const handleParticipation = (e) => {
        e.stopPropagation();
        if (isFull) return;
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        onRefresh();
    };

    return (
        <ProductContainer>
            <ProductContent onClick={handleClick}>
                <ProductImg src={imageSrc} alt={title} />
                <ProductInfo>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductLocationDateTime>
                        {location} · {getRelativeTime(dateTime)}
                    </ProductLocationDateTime>
                    <ProductPrice>{price ? price : "무료 나눔"}</ProductPrice>
                </ProductInfo>
            </ProductContent>

            {isGame ? (
                <GameButtonWrapper>
                    <GameButton
                        isFull={isFull}
                        disabled={isFull}
                        onClick={handleParticipation}
                    >
                        {isFull ? "선착순 마감" : "참여하기"}
                    </GameButton>
                </GameButtonWrapper>
            ) : (
                <ProductIconSection>
                    <IconImg src={ChatImg} alt="chat icon" />
                    <ChatNumber>{chatCount}</ChatNumber>
                    <IconImg src={HeartImg} alt="heart icon" />
                    <HeartNumber>{heartCount}</HeartNumber>
                </ProductIconSection>
            )}

            <ModalComponent
                isOpen={isModalOpen}
                onClose={handleModalClose}
                text="참여 완료!"
            />
        </ProductContainer>
    );
}

export default CardComponent;
