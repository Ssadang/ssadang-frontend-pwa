import React from "react";
import { CardListContainer, Card, CardImage, CardTitle, CardPrice, NoItemsMessage } from "./style";
import { useNavigate } from "react-router-dom";

const ItemsCardComponent = ({ items }) => {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <CardListContainer>
            {items && items.length > 0 ? (items.map((item) => (
                <Card
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                >
                    <CardImage src={item.image} alt={item.title} />
                    <CardTitle>{item.title}</CardTitle>
                    <CardPrice>{item.price}원</CardPrice>
                </Card>
            )))
                :
                (<NoItemsMessage>등록된 상품이 없습니다.</NoItemsMessage>)
            }
        </CardListContainer>
    );
};

export default ItemsCardComponent;