import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';

function MainRoute() {
  return (
    <>
        <Routes>
            <Route path='/main' element={ <MainPage /> } />
        </Routes>
    </>
  )
}

export default MainRoute;