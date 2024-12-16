import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';

function AuthRoute() {
  return (
    <>
        <Routes>
            <Route path='/auth' element={ <AuthPage /> } />
        </Routes>
    </>
  )
}

export default AuthRoute;