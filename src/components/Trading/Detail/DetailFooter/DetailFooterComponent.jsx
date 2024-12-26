import React, { useState } from "react";
import { FooterContainer, IconSection, TextSection, Button, ButtonSection, HeartIcon } from './style.js';

const DetailFooterComponent = ({ productData, onJoinClick, onChatClick, onHeartDoubleClick }) => {

    const { isGame, maxParticipants, currentParticipants, price, isLiked, likes } = productData;

    const isGameAvailable = isGame && currentParticipants < maxParticipants;

    const priceText =
        price === 0 ? "나눔 감사합니다." : `${price}원`;



    return (
        <FooterContainer>
            {/* 하트 아이콘 */}
            <IconSection>
                <HeartIcon
                    style={{ color: isLiked ? "red" : "#aaa" }} // 스타일로 직접 전달
                    onClick={onHeartDoubleClick} // 부모로 더블클릭 이벤트 전송                 
                >♥</HeartIcon>
            </IconSection>

            {/* 텍스트 섹션 */}
            <TextSection>
                <p className="price">{priceText}</p>
                <p className="note">가격제안 불가</p>
            </TextSection>

            {/* 버튼 섹션 */}
            <ButtonSection>
                {isGameAvailable && (
                    <Button
                        className="join"
                        onClick={onJoinClick}
                        disabled={!isGameAvailable}
                    >
                        참여하기
                    </Button>
                )}
                <Button className="chat" onClick={onChatClick}>
                    채팅하기
                </Button>
            </ButtonSection>
        </FooterContainer>
    );
};

export default DetailFooterComponent;
