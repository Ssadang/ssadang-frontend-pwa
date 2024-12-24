import React from "react";
import { StyledButton } from "./style";

function TradingButton({ children, isSelected, onClick }) {
    return (
        <StyledButton isSelected={isSelected} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default TradingButton;
