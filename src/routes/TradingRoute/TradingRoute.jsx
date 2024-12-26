import React from 'react'
import TradingMainPage from '../../pages/TradingPage/Main/TradingMainPage'
import TradingDetailPage from '../../pages/TradingPage/Detail/TradingDetailPage';
import { Routes, Route } from 'react-router-dom';

function TradingRoute() {
    return (
        <>
            <Routes>
                <Route path="/trading" element={<TradingMainPage />} />
                <Route path="/trading/detail/:id" element={<TradingDetailPage />} />
            </Routes>
        </>
    )
};

export default TradingRoute;
