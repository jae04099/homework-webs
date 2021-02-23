import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RecSubmitPage.css";
import "./RecBtn.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
    },
}));

const RecSubmitPage = (props) => {
    console.log(props);
    const [ctrSugList, setSugList] = useState("isClosed");
    const hideShowBtnHandler = () => {
        if (ctrSugList == "") {
            setSugList("isClosed");
        } else {
            setSugList("");
        }
    };
    const classes = useStyles();
    return (
        <>
            <div className="btn-wrap">
                <button onClick={hideShowBtnHandler}>
                    <FontAwesomeIcon className="faPlus" icon={faPlus} />
                </button>
            </div>
            <div className={`submit-bg ${ctrSugList}`}>
                <div className="submit-wrap">
                    <div className="submit-desc">
                        <h3>추천하기🎁</h3>
                        <h4>
                            여기에는 없지만,
                            <br />
                            <span>내가 아는 유용한 사이트</span>를 추천해주세요.
                            <br />
                            검토 후 추가하겠습니다!
                        </h4>
                    </div>
                    <div className={classes.root}>
                        <TextField
                            id="standard-full-width"
                            label="사이트명"
                            onChange={(e) => {
                                props.setRecTitle(e.target.value);
                            }}
                            style={{ margin: 8 }}
                            placeholder="과제좀해"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="사이트 주소(url)"
                            onChange={(e) => {
                                props.setRecUrl(e.target.value);
                            }}
                            style={{ margin: 8 }}
                            placeholder="http://homework.ml"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="이 사이트를 추천하는 이유"
                            onChange={(e) => {
                                props.setRecDesc(e.target.value);
                            }}
                            style={{ margin: 8 }}
                            placeholder="과제에 도움되는 사이트가 모여있어 편리해요."
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="submit-btn">
                        <button type="submit" onClick={props.submitInfo}>
                            제출하기
                        </button>
                    </div>
                    <div className="close">
                        <button onClick={hideShowBtnHandler}>창닫기</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecSubmitPage;
