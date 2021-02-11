import React from "react";
import "./Card.css";

const Card = () => {
    return (
            <div className="infoCard">
                <div className="title">
                    <h4>Flaticon</h4>
                    <div className="url">
                        <a href="https://www.flaticon.com/">
                            https://www.flaticon.com/
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <img
                        src="https://media.flaticon.com/share/flaticon-generic.jpg"
                        alt="web_og_image"
                        style={{ maxWidth: 260 + "px" }}
                    />
                    <p>
                        멋진 ppt 제작을 위한 깔끔한 아이콘들이 모여있는 웹.
                        한국인이라면 알아야한다.
                    </p>
                </div>
                <ul className="genre">
                    <li>PPT</li>
                    <li>디자인</li>
                    <li>아이콘</li>
                </ul>
            </div>
    );
};

export default Card;
