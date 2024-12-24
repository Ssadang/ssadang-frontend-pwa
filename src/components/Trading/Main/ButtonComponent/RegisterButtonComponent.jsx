import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterButton } from './style'; // 수정된 스타일 import

function RegisterButtonComponent() {
    const navigate = useNavigate();

    return (
        <RegisterButton onClick={() => navigate('/trading/register')}>
            + 글등록
        </RegisterButton>
    );
}

export default RegisterButtonComponent;
