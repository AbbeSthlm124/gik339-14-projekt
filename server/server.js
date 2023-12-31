const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./gik399.db");
const express = require("express");
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

server.get("/bilr", (req, res) => {
  const sql = "SELECT * FROM bilr";
  db.all(sql, (err, rows) => {
    if (err) res.status(500).send(err);
    else res.send(rows);
  });
});

server.get("/bilr/:id", (req, res) => {});

server.put("/bilr", (req, res) => {});

server.post("/bilr", (req, res) => {});

server.delete("/bilr/:id", (req, res) => {});
