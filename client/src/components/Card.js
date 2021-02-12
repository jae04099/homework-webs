import React from "react";
import "./Card.css";

const Card = ({cardData}) => {
    console.log(cardData.web_url)
    return (
            <div className="infoCard">
                <div className="title">
                    <h4>{cardData.web_title}</h4>
                    <div className="url">
                        <a href={cardData.web_url}>
                            {cardData.web_url}
                        </a>
                    </div>
                </div>
                <div className="desc">
                    { cardData.web_og == 'null' ? <div className="no_og"><a href={cardData.web_url}>사이트 바로가기</a></div> : <img
                        src={cardData.web_og}
                        alt="web_og_image"
                        style={{ maxWidth: 260 + "px", maxHeight: 157 + "px" }}
                    />}
                    <p>
                        {cardData.web_desc}
                    </p>
                </div>
                <ul className="genre">
                    <li>{cardData.main_tag}</li>
                    
                </ul>
            </div>
    );
};

export default Card;
