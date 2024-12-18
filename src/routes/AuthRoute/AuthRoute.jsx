import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthMainPage from '../../pages/AuthPage/AuthMainPage/AuthMainPage';
import AuthSignInPage from '../../pages/AuthPage/AuthSignInPage/AuthSignInPage';

function AuthRoute() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={ <AuthMainPage /> } />
            <Route path='/auth/signin' element={ <AuthSignInPage /> } />
        </Routes>
    </>
  )
}

export default AuthRoute;