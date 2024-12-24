import React from 'react'
import { Container, RightContainer, LeftContainer, Text, UserImg, Emoji } from './style.js';

function UserBarComponent() {
    return (
        <Container>
            <LeftContainer>
                <UserImg src="/img/image1.jpg" />
                <Text>유저네임</Text>

            </LeftContainer>
            <RightContainer>
                <Text style={{ color: "#3EBEEE" }}>유저기수</Text>
                <Emoji>🔥</Emoji>
            </RightContainer>
        </Container>
    )
}

export default UserBarComponent;
