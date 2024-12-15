import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`${reset}`; // Cross Browsing

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
