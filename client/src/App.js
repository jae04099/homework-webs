import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Axios from "axios";
import Category from "./components/Category";
import RecSubmitPage from "./components/RecSubmitPage";

function App() {
    const [lists, setLists] = useState([]);
    const [filtered, setFiltered] = useState(lists);
    const [category, setCategory] = useState("countAll");
    const [recTitle, setRecTitle] = useState("");
    const [recUrl, setRecUrl] = useState("");
    const [recDesc, setRecDesc] = useState("");
    const [ctrSugList, setSugList] = useState("isClosed");
    const [isBlank, setIsBlank] = useState({errorText: ''})

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((res) => {
            setLists(res.data);
            setFiltered(res.data);
        });
    }, []);
    useEffect(() => {
        let filteredLists = lists;
        if (category !== "countAll") {
            filteredLists = filteredLists.filter(
                (lists) => lists.tag_class == category
            );
        }
        setFiltered(filteredLists);
    }, [category]);

    const hideShowBtnHandler = () => {
        if (ctrSugList == "") {
            setSugList("isClosed");
        } else {
            setSugList("");
        }
    };
    const submitInfo = () => {
        if (recTitle == "" || recUrl == "" || recDesc == "") {
            setIsBlank({errorText: '빈칸을 채워주세요!'})
        }else {
            Axios.post("http://localhost:3001/api/insert", {
                recTitle: recTitle,
                recUrl: recUrl,
                recDesc: recDesc,
            })
                .then((res) => {
                    setIsBlank({errorText: ''})
                    alert("thanks!");
                })
                .then(setSugList("isClosed"));
        }
    };

    return (
        <div className="App">
            <Navbar />
            <div className="catWrap">
                <div className="catInnerGrid">
                    <Category cardData={filtered} setCategory={setCategory} />
                </div>
            </div>
            <div className="cardWrap">
                <div className="grid-card">
                    <div className="flex-card">
                        {filtered.map((cardData) => {
                            return (
                                <Card
                                    cardData={cardData}
                                    category={category}
                                    key={cardData._id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
            {/* <RecBtn /> */}
            <RecSubmitPage
                setRecTitle={setRecTitle}
                setRecUrl={setRecUrl}
                setRecDesc={setRecDesc}
                recTitle={recTitle}
                recUrl={recUrl}
                recDesc={recDesc}
                submitInfo={submitInfo}
                ctrSugList={ctrSugList}
                isBlank={isBlank}
                hideShowBtnHandler={hideShowBtnHandler}
            />
        </div>
    );
}

export default App;

{
    /* <h1>CRUD APP</h1>
            <div className="form">
                <label>Movie Name:</label>
                <input
                    type="text"
                    name="movieName"
                    onChange={(e) => {
                        setWebName(e.target.value);
                    }}
                />
                <label>Review:</label>
                <input
                    type="text"
                    name="review"
                    onChange={(e) => {
                        setWebUrl(e.target.value);
                    }}
                />
                <button onClick={submitInfo}>submit</button>
                {webList.map((props) => {
                    return (
                        <div className="card">
                            <h1>{props.web_title}</h1>
                            <p>Web-Title: {props.web_url}</p>
                            <button
                                onClick={() => {
                                    deleteInfo(props.web_title);
                                }}
                            >
                                Delete
                            </button>
                            <input type="text" id="updateInput" onChange={(e) => {
                              setNewList(e.target.value)
                            }}/>
                            <button onClick={() => {
                              updateInfo(props.web_title)
                            }}>Update</button>
                        </div>
                    );
                })}
            </div>  */
}
// const [webName, setWebName] = useState("");
// const [webUrl, setWebUrl] = useState("");
// const [webList, setWebList] = useState([]);
// const [newList, setNewList] = useState("");

// useEffect(() => {
//     Axios.get("http://localhost:3001/api/get").then((res) => {
//         setWebList(res.data);
//     });
// }, []);

// const submitInfo = () => {
//     Axios.post("http://localhost:3001/api/insert", {
//         webUrl: webUrl,
//         webTitle: webName,
//     });
//     setWebList([...webList, { webUrl: webUrl, webName: webName }]);
// };

// const deleteInfo = (web) => {
//     Axios.delete(`http://localhost:3001/api/delete/${web}`);
// };
// const updateInfo = (web) => {
//     Axios.put("http://localhost:3001/api/update", {
//         webUrl: web,
//         webTitle: newList,
//     });
//     setNewList("");
// };
