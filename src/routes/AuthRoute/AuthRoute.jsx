import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthMainPage from '../../pages/AuthPage/AuthMainPage/AuthMainPage';

function AuthRoute() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={ <AuthMainPage /> } />
        </Routes>
    </>
  )
}

export default AuthRoute;