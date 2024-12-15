import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SplashScreenPage from './pages/SplashScreenPage/SplashScreenPage';

const GlobalStyle = createGlobalStyle`${reset}`; // Cross Browsing

function App() {
  return (
    <>
      <GlobalStyle />
      <SplashScreenPage />
    </>
  );
}

export default App;
