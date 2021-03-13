import React from "react";
import styled from 'styled-components'
import "./Card.css";

const Card = ({ cardData }) => {
    return (
            <S.Card className="infoCard">
                <div className="title">
                    <h4>{cardData.web_title}</h4>
                    <div className="url">
                        <a href={cardData.web_url}>{cardData.web_url}</a>
                    </div>
                </div>
                <div className="desc">
                    <div className="img-wrap">
                        {cardData.web_og == "null" ? (
                            <div className="no_og">
                                <a href={cardData.web_url}>사이트 바로가기</a>
                            </div>
                        ) : (
                            <img src={cardData.web_og} alt="web_og_image" />
                        )}
                    </div>
                    <p>{cardData.web_desc}</p>
                </div>
                <ul className="genre">
                    <li>{cardData.main_tag}</li>
                </ul>
            </S.Card>
    );
};

export default Card;

const S = {};
S.Card = styled.div `

    background: ${props => props.theme.colors.cardBgColor};
    box-shadow: ${props => props.theme.colors.cardShadow};

.title h4 {
    color: ${props => props.theme.colors.titleColor};

}
.title .url > a {
    color: ${props => props.theme.colors.urlColor};

}
.desc p {
    color: ${props => props.theme.colors.descColor};

}
`
