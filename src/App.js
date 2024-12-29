import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Route, Routes, useLocation } from 'react-router-dom';
import SplashScreenRoute from './routes/SplashScreenRoute/SplashScreenRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import MainRoute from './routes/MainRoute/MainRoute';
import TradingRoute from './routes/TradingRoute/TradingRoute';
import Footer from './layouts/Footer/Footer';

const GlobalStyle = createGlobalStyle`${reset}`; // Cross Browsing

function App() {
  const location = useLocation();

  // const footerCheck = !(location.pathname === '/' || location.pathname.startsWith('/auth'));

  return (
    <>
      <GlobalStyle />
      <div id='rootContainer'>
        <Routes>
          <Route path="/*" element={
            <>
              <SplashScreenRoute />
              <AuthRoute />
              <MainRoute />
              <TradingRoute />
            </>
          }>
          </Route>
        </Routes>
        {/* {footerCheck && <Footer />} */}
      </div>
    </>
  );
}

export default App;
