const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "KAlana#23",
    database: "crud"
});

app.post("/signup", async (req, res) => {
    const sql = "INSERT INTO signn (`name`, `email`, `password`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
});

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT id FROM signn WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("Error selecting data from signn table:", err);
            return res.status(500).json({ error: "Error logging in user" });
        }
        if (result.length > 0) {
            return res.json({ message: "Success", userId: result[0].id });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    });
});

app.listen(8082, () => {
    console.log("Server is running on port 8082");
})