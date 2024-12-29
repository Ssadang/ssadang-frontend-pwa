import React, { useState } from 'react';
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



    //게임 버튼 활성화 여부 판단하는 함수 
    const isFull = maxParticipants > 0 && currentParticipants >= maxParticipants;
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

    const navigate = useNavigate(); // React Router의 네비게이션 훅

    const handleClick = () => {
        navigate(`/trading/detail/${product.id}`);
    };

    const handleParticipation = () => {
        if (isFull) return; // 참여 불가능하면 아무 작업도 안함

        //참여 처리 로직

        setIsModalOpen(true); // 모달열기

    };

    const handleModalClose = () => {
        setIsModalOpen(false); // 모달닫기
        onRefresh(); // 상위 컴포넌트에게 데이터 다시 로드 요청청
    }

    return (
        <ProductButton onClick={handleClick}>
            <ProductImg src={imageSrc} alt={title} />
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductLocationDateTime>{location} · {getRelativeTime(dateTime)}</ProductLocationDateTime>
                <ProductPrice>{price ? price : "무료 나눔"}</ProductPrice>
                {isGame ? (
                    <GameButton
                        isFull={isFull}
                        disabled={isFull}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleParticipation();
                        }}
                    >
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

            {/* 모달 컴포넌트 */}
            <ModalComponent
                isOpen={isModalOpen}
                onClose={handleModalClose} // 모달 닫을 때 데이터 재랜더링 호출
                text="참여 완료!"
            />
        </ProductButton>
    );
}

export default CardComponent;
