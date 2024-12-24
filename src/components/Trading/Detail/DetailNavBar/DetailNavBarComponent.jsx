import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, IconGroup, Icon } from './style.js';
import { ReactComponent as BackIcon } from '../../../../assets/icons/back.svg';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/Home.svg';
import { ReactComponent as AlertIcon } from '../../../../assets/icons/Bell.svg';
import { ReactComponent as SettingsIcon } from '../../../../assets/icons/Setting.svg';

function DetailNavBar({ isScrolled }) {

    const navigate = useNavigate();
    return (
        <Container isScrolled={isScrolled}>
            <IconGroup>
                <Icon onClick={() => navigate(-1)}> {/* 뒤로가기 */}
                    <BackIcon />
                </Icon>
                <Icon onClick={() => navigate('/')}> {/* 홈으로 이동 */}
                    <HomeIcon />
                </Icon>
            </IconGroup>

            {/* 오른쪽 아이콘 그룹 */}
            <IconGroup>
                <Icon onClick={() => navigate('/notifications')}> {/* 알람 페이지 이동 */}
                    <AlertIcon />
                </Icon>
                <Icon onClick={() => navigate('/settings')}> {/* 설정 페이지 이동 */}
                    <SettingsIcon />
                </Icon>
            </IconGroup>

        </Container>
    )
}

export default DetailNavBar;
