import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Axios from "axios";
import Category from "./components/Category";

function App() {
    const [lists, setLists] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((res) => {
                     setLists(res.data);
                     console.log(lists[0])
                 });
    }, [])
    return (
        <div className="App">
            <Navbar />
            <Category cardData = {lists}/>
            <div className="cardWrap">
                <div className="grid-card">
                    <div className="flex-card">
                        {lists.map((cardData) => {
                            return(
                                <Card cardData = {cardData} />
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;

 {/* <h1>CRUD APP</h1>
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
            </div>  */}
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
        