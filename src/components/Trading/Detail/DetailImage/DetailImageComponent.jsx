import React, { useState, useRef } from 'react';
import { SliderContainer, SlideImage, SlideTrack, Pagination, Dot } from './style';

const DetailImageComponent = ({ images, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // 다음 이미지로 이동
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        }
        if (touchStartX.current - touchEndX.current < -50) {
            // 이전 이미지로 이동
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    return (
        <SliderContainer
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* 이미지 트랙 */}
            <SlideTrack currentIndex={currentIndex}>
                {images.map((src, index) => (
                    <SlideImage key={index} src={src} alt={`Slide ${index + 1}`} />
                ))}
                {children}
            </SlideTrack>

            {/* 페이지네이션 */}
            <Pagination>
                {images.map((_, index) => (
                    <Dot key={index} isActive={index === currentIndex} />
                ))}
            </Pagination>
        </SliderContainer>
    );
};

export default DetailImageComponent;
