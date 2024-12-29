import React, { useState, useEffect } from 'react'
import MenuBar from '../../../components/Trading/Main/MenuBarComponent/TradingMenuBarComponent.jsx';
import TradingButton from '../../../components/Trading/Main/ButtonComponent/TradingButtonComponent.jsx'
import './style.css';
import CardComponent from '../../../components/Trading/Main/CardComponent/TradingCardComponent.jsx';
import { saleDummyData, freeDummyData } from '../../../assets/DummyData/data.js';
import RegisterButton from '../../../components/Trading/Main/ButtonComponent/RegisterButtonComponent.jsx';

function TradingMainPage() {

    const [selectedRegion, setSelectedRegion] = useState("부울경"); // 기본 지역
    const [selectedMode, setSelectedMode] = useState("판매"); // 기본 모드
    const [products, setProducts] = useState([]); // 상품 데이터



    // API 요청 함수
    // const fetchProducts = async (region, mode) => {
    //     try {
    //         const response = await axios.get(`/api/products`, {
    //             params: { region, mode }, // 지역과 모드에 따라 데이터 요청
    //         });
    //         setProducts(response.data); // 응답 데이터 저장
    //     } catch (error) {
    //         console.error("데이터 요청 실패:", error);
    //     }
    // };

    const fetchData = () => {
        // API 호출 또는 더미 데이터 로드
        setProducts(saleDummyData);
    };

    // useEffect를 사용하여 mode 또는 region 변경 감지 및 데이터 업데이트
    useEffect(() => {
        if (selectedRegion === "부울경") {
            if (selectedMode === "판매") {
                setProducts(saleDummyData);
            } else if (selectedMode === "나눔") {
                setProducts(freeDummyData);
            }
        } else {
            setProducts([]);
        }
    }, [selectedMode, selectedRegion]);



    return (
        <div className='container'>
            <div className="menuBar">
                <MenuBar
                    selectedRegion={selectedRegion}
                    onRegionChange={(region) => {
                        setSelectedRegion(region);
                        setSelectedMode("판매");
                    }}>
                </MenuBar>
            </div>
            <div className="subBar">
                <TradingButton
                    isSelected={selectedMode === "판매"}
                    onClick={() => setSelectedMode("판매")}
                >
                    판매
                </TradingButton>
                <TradingButton
                    isSelected={selectedMode === "나눔"}
                    onClick={() => setSelectedMode("나눔")}
                >
                    나눔
                </TradingButton>
            </div>

            <div className='CardListContainer'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <CardComponent key={product.id} product={product} onReFresh={fetchData} />
                    ))
                ) : (<p style={{ marginTop: "20px", textAlign: "center" }}>등록된 매물이 없습니다.</p>)}

            </div>
            <RegisterButton />

        </div>
    )
}

export default TradingMainPage;