import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SplashScreenRoute from './routes/SplashScreenRoute/SplashScreenRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import MainRoute from './routes/MainRoute/MainRoute';

const GlobalStyle = createGlobalStyle`${reset}`; // Cross Browsing

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={
          <>
            <SplashScreenRoute />
            <AuthRoute />
            <MainRoute />
          </>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
