import React, { useState, useEffect } from 'react'
import "./style.css";
import NavBar from '../../../components/Trading/Detail/DetailNavBar/DetailNavBarComponent';
import UserBar from '../../../components/Trading/Detail/DetailUserBar/DetailUserBarComponent';
import ProductImg from '../../../components/Trading/Detail/DetailImage/DetailImageComponent';
import ProductInfo from '../../../components/Trading/Detail/DetailInfo/DetailInfoComponent';
import ItemsComponent from '../../../components/Trading/Detail/DetailItemsCard/DetailItemsCardComponent';
import ItemsBarComponent from '../../../components/Trading/Detail/DetailItemsBar/DetailItemsBarComponent';
import DetailFooter from '../../../components/Trading/Detail/DetailFooter/DetailFooterComponent';
import { useParams } from 'react-router-dom';

function TradingDetailPage() {

    // 내가 누른 품목의 id 
    const { id } = useParams();

    const img = [
        `/img/image1.jpg`,
        `/img/image2.jpg`,
        `/img/image3.jpg`,
    ];

    //내가 누른 품목의 상세페이지
    // 초기 productData를 상태로 관리
    const [productData, setProductData] = useState({
        id: 1,
        title: "중고 iPhone 13 판매합니다",
        category: "전자기기",
        location: "부울경",
        price: 0,
        date: "2024-12-21T09:00:00Z",
        description: "기기 상태는 A급입니다.",
        isLiked: true, // 좋아요 여부
        likes: 20, // 관심 수
        views: 120,
        isGame: true,
        maxParticipants: 3,
        currentParticipants: 2,
        username: "경록좌",
    });


    // axios user의 판매목록
    const UserProductData = [
        // { id: 1, image: "/img/item1.jpg", title: "아이폰 12 중고", price: "600,000" },
        // { id: 2, image: "/img/item2.jpg", title: "아이패드 미니 5", price: "350,000" },
        // { id: 3, image: "/img/item3.jpg", title: "맥북 프로 2020", price: "1,200,000" },
        // { id: 4, image: "/img/item4.jpg", title: "애플워치 SE", price: "200,000" },

    ];

    // axios 같은은 카테고리의 판매목록
    const SameCategoryItems = [
        { id: 1, image: "/img/bn.png", title: "아이폰 12 중고", price: "600,000" },
        { id: 2, image: "/img/item2.jpg", title: "아이패드 미니 5", price: "350,000" },
        { id: 3, image: "/img/item3.jpg", title: "맥북 프로 2020", price: "1,200,000" },
        { id: 4, image: "/img/item4.jpg", title: "애플워치 SE", price: "200,000" },

    ];

    const [isScrolled, setIsScrolled] = useState(false);

    const handleJoinClick = () => {
        console.log("참여하기 버튼 클릭");
    };

    const handleChatClick = () => {
        console.log("채팅하기 버튼 클릭");
    };

    // 하트 클릭 핸들러
    const handleHeartClick = () => {
        setProductData((prevData) => ({
            ...prevData,
            isLiked: !prevData.isLiked, // 좋아요 여부 토글
            likes: prevData.isLiked ? prevData.likes - 1 : prevData.likes + 1, // 관심 수 업데이트
        }));
    };

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > window.innerHeight * 0.5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="page-container"> {/* 최상위 컨테이너 */}
            <div className="container-detail">

                <NavBar $isScrolled={isScrolled} />
                <ProductImg images={img} />

                <UserBar />

                <ProductInfo data={productData} />

                <ItemsBarComponent username={productData.username} />
                <ItemsComponent items={UserProductData} />
                <ItemsBarComponent />
                <ItemsComponent items={SameCategoryItems} />
                <DetailFooter
                    productData={productData}
                    onJoinClick={handleJoinClick}
                    onChatClick={handleChatClick}
                    onHeartDoubleClick={handleHeartClick}
                />
            </div>

        </div>
    );
}

export default TradingDetailPage;