const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.HEROKU_HOST,
    port: "3306",
    user: process.env.HEROKU_USER,
    password: process.env.HEROKU_PW,
    database: process.env.HEROKU_DB,
});

// mysql://bc127d0cee8940:7d37d76c@us-cdbr-east-03.cleardb.com/heroku_159c177e36b1ddc?reconnect=true

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
    console.log(req.body);
    const recTitle = req.body.recTitle;
    const recUrl = req.body.recUrl;
    const recDesc = req.body.recDesc;
    const sqlInsert =
        "INSERT INTO rec_web (rec_title, rec_url, rec_desc) VALUE (?,?,?)";
    db.query(sqlInsert, [recTitle, recUrl, recDesc], (err, result) => {
        console.log(result);
        console.log(err);
    });
});
// app.post("/api/insert", (req, res) => {
//     const webUrl = req.body.webUrl;
//     const webTitle = req.body.webTitle;
//     const sqlInsert = "INSERT INTO web_lists (web_url, web_title) VALUE (?,?)";
//     db.query(sqlInsert, [webUrl, webTitle], (err, result) => {

//     });
// });

app.delete("/api/delete/:webTitle", (req, res) => {
    const title = req.params.webTitle;
    const sqlDelete = "DELETE FROM web_lists WHERE web_title = ?";

    db.query(sqlDelete, title, (err, result) => {});
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
