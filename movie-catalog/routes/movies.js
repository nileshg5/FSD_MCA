const express = require("express");
const db = require("../db");

const router = express.Router();

// GET all movies
router.get("/", (req, res) => {
  db.query("SELECT * FROM movies", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new movie
router.post("/", (req, res) => {
  const { title, director, genre, release_year, rating } = req.body;
  db.query(
    "INSERT INTO movies (title, director, genre, release_year, rating) VALUES (?, ?, ?, ?, ?)",
    [title, director, genre, release_year, rating],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Movie added successfully", id: result.insertId });
    }
  );
});

// PUT update movie
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, genre, release_year, rating } = req.body;
  db.query(
    "UPDATE movies SET title=?, director=?, genre=?, release_year=?, rating=? WHERE id=?",
    [title, director, genre, release_year, rating, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Movie updated successfully" });
    }
  );
});

// DELETE movie
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM movies WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Movie deleted successfully" });
  });
});

module.exports = router;
