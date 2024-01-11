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

server.get("/bilr/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM bilr WHERE id=${id}`;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows[0]);
    }
  });
});

server.put("/bilr", (req, res) => {
  const updatedBilr = req.body;
  const id = updatedBilr.id;

  const bil = {
    regnr: updatedBilr.regnr,
    model: updatedBilr.model,
    mfr: updatedBilr.mfr,
    color: updatedBilr.color,
  };

  let updateString = "";
  const columnsArray = Object.keys(bil);
  columnsArray.forEach((column, i) => {
    updateString += `${column}="${bil[column]}"`;
    if (i !== columnsArray.length - 1) updateString += ",";
  });

  const sql = `UPDATE bilr SET ${updateString} WHERE id=${id}`;

  db.run(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("Updated");
    }
  });
});

server.post("/bilr", (req, res) => {
  const bil = req.body;
  const sql = `INSERT INTO bilr(regnr, model, mfr, color) VALUES(?,?,?,?)`;
  db.run(sql, Object.values(bil), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("Car saved");
    }
  });
});

server.delete("/bilr/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM bilr WHERE id = ${id}`;

  db.run(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("Deleted");
    }
  });
});
