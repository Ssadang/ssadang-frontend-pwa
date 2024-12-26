import React from 'react'
import { Container, Text } from './style'

export default function ItemsBarComponent({ username }) {
    return (
        <Container>
            <Text>
                <h1>
                    {username ? `${username} 님의 판매 상품` : '같은 카테고리 상품이에요.'}
                </h1>
            </Text>
        </Container>
    )
}
