import React from 'react'
import { ModalOverlay, ModalContent, GiftconList, GiftconItem, ConfirmButton } from './style';

const GiftconModal = ({ giftconData, onClose, onSelectGiftcon }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <h4>내 기프티콘</h4>
                <GiftconList>
                    {giftconData.map((item, index) => (
                        <GiftconItem
                            key={index}
                            onClick={() => onSelectGiftcon(item)} // 클릭 시 선택된 기프티콘 데이터 전달
                        >
                            <img src={item.imageUrl} alt={item.name} />
                            <p>{item.name}</p>
                        </GiftconItem>
                    ))}
                </GiftconList>
                <ConfirmButton onClick={onClose}>닫기</ConfirmButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default GiftconModal;
