const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Lc0711zz",
    database: "collegewebdb",
});

app.get("/", (req, res) => {
    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
