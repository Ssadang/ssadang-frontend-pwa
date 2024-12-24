import React from 'react'
import TradingMainPage from '../../pages/TradingPage/Main/TradingMainPage'
import { Routes, Route } from 'react-router-dom';

function TradingRoute() {
    return (
        <>
            <Routes>
                <Route path="/trading" element={<TradingMainPage />} />
            </Routes>
        </>
    )
};

export default TradingRoute;
