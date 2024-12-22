import React, { useState } from "react";
import { Container, LeftContainer, RightContainer, SelectedRegion, DropdownMenu, DropdownItem, IconWrapper, ArrowDownWrapper } from "./style";
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/MenuDropDown.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/Search.svg";
import { ReactComponent as BellIcon } from "../../../../assets/icons/Bell.svg";

function TradingMenuBarComponent({ selectedRegion, onRegionChange }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const regions = ["부울경", "대전", "서울", "광주", "구미"];

    const handleRegionSelect = (region) => {
        onRegionChange(region); // 상위 컴포넌트에 지역 변경 알림
        setIsDropdownOpen(false);
    };

    return (
        <Container>
            <LeftContainer>
                <SelectedRegion onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {selectedRegion}
                    <ArrowDownWrapper>
                        <ArrowIcon />
                    </ArrowDownWrapper>
                </SelectedRegion>
                {isDropdownOpen && (
                    <DropdownMenu>
                        {regions.map((region) => (
                            <DropdownItem key={region} onClick={() => handleRegionSelect(region)}>
                                {region}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                )}
            </LeftContainer>
            <RightContainer>
                <IconWrapper>
                    <SearchIcon />
                </IconWrapper>
                <IconWrapper>
                    <BellIcon />
                </IconWrapper>
            </RightContainer>
        </Container>
    );
}

export default TradingMenuBarComponent;
