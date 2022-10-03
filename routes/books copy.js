const express = require("express");
const joi = require("Joi");
const mongoose = require("mongoose");

const router = express.Router();

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  pages: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
});

const Book = mongoose.model("book", bookSchema);

router.get("/", async (req, res) => {
  const books = await Book.find();

  return res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book)
    return res.status(404).send("The book with the given id was not found");

  return res.send(book);
});

router.put("/:id", async (req, res) => {
  const schema = joi.object({
    _id: joi.string().required(),
    title: joi.string().required(),
    pages: joi.string().required(),
    author: joi.string().required(),
    genre: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
});

router.post("/", (req, res) => {
  const schema = joi.object({
    _id: joi.string().required(),
    title: joi.string().required(),
    pages: joi.string().required(),
    author: joi.string().required(),
    genre: joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(404).send(error.message);
  books.push(req.body);

  return res.send(books);
});

router.delete("/:id", (req, res) => {
  const book = books.find((b) => b._id === req.params.id);

  if (!book)
    return res.status(404).send("The book with the given id was not found");

  const index = books.indexOf(book);

  books.splice(index, 1);

  return res.send(book);
});

module.exports = router;
