import React from "react";
import { Container, TitleSection, DescriptionSection, StatsSection } from "./style.js";
import { getRelativeTime } from "../../../../constants/Util/date.js";

const DetailInfoComponent = ({ data }) => {

    const { title, category, date, description, likes, views } = data;
    return (
        <Container>
            {/* 제목, 카테고리, 날짜 */}
            <TitleSection>
                <h1>{title}</h1>
                <span>{category} · {getRelativeTime(date)}</span>
            </TitleSection>

            {/* 제품 설명 */}
            <DescriptionSection>
                <p>{description}</p>
            </DescriptionSection>

            {/* 관심 수 및 조회 수 */}
            <StatsSection>
                <div className="stat">
                    관심 <span>{likes}</span>
                </div>
                <span className="margin">·</span>
                <div className="stat">
                    조회수 <span>{views}</span>
                </div>
            </StatsSection>
        </Container>
    );
};

export default DetailInfoComponent;
