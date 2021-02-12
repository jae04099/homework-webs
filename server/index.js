const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Lc0711zz",
    database: "collegewebdb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM web_lists";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const webUrl = req.body.webUrl;
    const webTitle = req.body.webTitle;
    const sqlInsert = "INSERT INTO web_lists (web_url, web_title) VALUE (?,?)";
    db.query(sqlInsert, [webUrl, webTitle], (err, result) => {
    
    });
});

app.delete("/api/delete/:webTitle", (req, res) => {
    const title = req.params.webTitle;
    const sqlDelete = "DELETE FROM web_lists WHERE web_title = ?";

    db.query(sqlDelete, title, (err, result) => {
        
    });
});

// app.put("/api/update", (req, res) => {
//     const title = req.body.webTitle;
//     const url = req.body.webUrl;
//     const sqlUpdate = "UPDATE web_lists SET web_url = ? WHERE web_title = ?";

//     db.query(sqlUpdate, [url, title], (err, result) => {
//         if (err) console.log(err);
//     });
// });

app.listen(3001, () => {
    console.log("running on port 3001");
});
