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
position: absolute;
top: 0;
right: 0;
    width: 3rem;
    height: 2rem;
    border: none;
    background-color: #000;
    color: ${(props) => props.theme.colors.titleColor}; // 테마 변경 컬러 지정
    border-radius: 8px;
    cursor: pointer;

    span {
        font-size: 1rem;
        font-weight: bold;
    }
`;
