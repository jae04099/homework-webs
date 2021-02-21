import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RecBtn.css";

const RecBtn = () => {
    return (
        <div>
            <div className="btn-wrap">
                <button>
                    <FontAwesomeIcon className="faPlus" icon={faPlus} />
                </button>
            </div>
        </div>
    );
};

export default RecBtn;
