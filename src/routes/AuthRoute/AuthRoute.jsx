import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthMainPage from '../../pages/AuthPage/AuthMainPage/AuthMainPage';
import AuthSignInPage from '../../pages/AuthPage/AuthSignInPage/AuthSignInPage';
import AuthSignUpPage from '../../pages/AuthPage/AuthSignUpPage/AuthSignUpPage';
import AuthFindUserInfoPage from '../../pages/AuthPage/AuthFindUserInfoPage/AuthFindUserInfoPage';

function AuthRoute() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={ <AuthMainPage /> } />
            <Route path='/auth/signin' element={ <AuthSignInPage /> } />
            <Route path='/auth/signup' element={ <AuthSignUpPage /> } />
            <Route path='/auth/finduserInfo' element={ <AuthFindUserInfoPage /> } />
        </Routes>
    </>
  )
}

export default AuthRoute;