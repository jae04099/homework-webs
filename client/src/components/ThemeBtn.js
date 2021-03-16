import React from "react";
import styled from "styled-components";

const ThemeBtn = ({ title, click }) => {
    return (
        <S.Button onClick={click}>
            <span>{title}</span>
        </S.Button>
    );
};

export default ThemeBtn;

const S = {};

S.Button = styled.button`
    width: 3rem;
    height: 2rem;
    border: none;
    background-color: ${props => props.theme.colors.bgColor};
    color: ${props => props.theme.colors.titleColor};
    border-radius: 8px;
    cursor: pointer;

    span {
        font-size: 1rem;
        font-weight: bold;
    }
`;
