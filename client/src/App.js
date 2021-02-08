import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
    const [webName, setWebName] = useState("");
    const [webUrl, setWebUrl] = useState("");
    const [webList, setWebList] = useState([])

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((res) => {
        setWebList(res.data)
      })
    }, [])

const submitInfo = () => {
  Axios.post('http://localhost:3001/api/insert', {webUrl: webUrl, webTitle: webName}).then(() => {
    alert('successful insert')
  })
}

    return (
        <div className="App">
            <h1>CRUD APP</h1>
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
                  return <h1>Name: {props.web_title}</h1>
                })}
            </div>
        </div>
    );
}

export default App;
