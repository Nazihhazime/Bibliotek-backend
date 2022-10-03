const express = require("express");
const books = require("./routes/books copy");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/api/books", books);

mongoose
  .connect("mongodb://localhost/books")
  .then(() => console.log("connect to MongoDB"))
  .catch((error) => console.log("could not connect...", error));

app.listen(8000, () => console.log("listening..."));
