import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreenPage from '../../pages/SplashScreenPage/SplashScreenPage';

function SplashScreenRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element={ <SplashScreenPage /> } />
        </Routes>
    </>
  )
}

export default SplashScreenRoute;
