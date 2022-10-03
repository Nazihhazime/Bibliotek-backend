// const express = require("express");
// const joi = require("Joi");

// const router = express.Router();

// const books = [
//   {
//     _id: "1",
//     title: "Intesive Code",
//     pages: "500",
//     author: "Aladin",
//     genre: "tech",
//   },
//   { _id: "2", title: "Hetch", pages: "600", author: "David", genre: "startup" },
//   { _id: "3", title: "SFW", pages: "500", author: "Nazih ", genre: "food" },
// ];

// router.get("/", (req, res) => {
//   return res.send(books);
// });

// router.get("/:id", (req, res) => {
//   const book = books.find((b) => b._id === req.params.id);

//   if (!book)
//     return res.status(404).send("The book with the given id was not found");

//   return res.send(book);
// });

// router.put("/:id", (req, res) => {
//   const schema = joi.object({
//     _id: joi.string().required(),
//     title: joi.string().required(),
//     pages: joi.string().required(),
//     author: joi.string().required(),
//     genre: joi.string().required(),
//   });

//   const { error } = schema.validate(req.body);

//   if (error) return res.status(404).send(error.message);
//   books.push(req.body);

//   const book = books.find((b) => b._id === req.params.id);

//   if (!book)
//     return res.status(404).send("The book with the given id was not found");

//   book.author = req.body.author;

//   return res.send(book);
// });

// router.post("/", (req, res) => {
//   const schema = joi.object({
//     _id: joi.string().required(),
//     title: joi.string().required(),
//     pages: joi.string().required(),
//     author: joi.string().required(),
//     genre: joi.string().required(),
//   });

//   const { error } = schema.validate(req.body);

//   if (error) return res.status(404).send(error.message);
//   books.push(req.body);

//   return res.send(books);
// });

// router.delete("/:id", (req, res) => {
//   const book = books.find((b) => b._id === req.params.id);

//   if (!book)
//     return res.status(404).send("The book with the given id was not found");

//   const index = books.indexOf(book);

//   books.splice(index, 1);

//   return res.send(book);
// });

// module.exports = router;
