import React, { useState } from "react";
import "./Dropbanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dropbanner = () => {
    const [hideBanner, setHideBanner] = useState("");
    const isBannerShown = () => {
        setHideBanner("hide-banner");
    };
    return (
        <div className={`banner-wrap ${hideBanner}`}>
            <div className="banner-box">
                <p className="banner-desc">
                    이 브라우저는 오래됐습니다. 아래 브라우저로 최적의 서비스를
                    경험하세요!
                </p>
                <p className="banner-ex">
                    <a
                        href="https://www.microsoft.com/ko-kr/edge"
                        className="edge"
                    >
                        MS엣지
                    </a>
                    <a
                        href="https://www.google.co.kr/chrome/?brand=FKPE&gclid=Cj0KCQiA-OeBBhDiARIsADyBcE56uvcdRu7TRGUAPqssiNf0GUm-EBnhP1KBFieQoKBuPuL6G_D1zZEaAv3aEALw_wcB&gclsrc=aw.ds"
                        className="chrome"
                    >
                        크롬
                    </a>
                    <a
                        href="https://www.mozilla.org/ko/firefox/new/"
                        className="firefox"
                    >
                        파이어폭스
                    </a>
                </p>
                <button className="close-banner" onClick={isBannerShown}>
                    <FontAwesomeIcon className="banner-faPlus" icon={faPlus} />
                </button>
            </div>
        </div>
    );
};

export default Dropbanner;
