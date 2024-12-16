import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SplashScreenPage from './pages/SplashScreenPage/SplashScreenPage';
import { Route, Routes } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`${reset}`; // Cross Browsing

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={
          <>
            <SplashScreenPage />
          </>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
