const express = require("express");
const question = require("./question");
require("dotenv").config();
const app = express();
let questions = [];

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("home");
  next();
});

app.get("/test", (req, res, next) => {
  try {
    res.render("test");
  } catch (error) {
    next(error);
  }
});

app.get("/test/:count", function (req, res) {
  const count = req.params.count;
  getQuestions(count);
  res.send(questions);
});

function getQuestions(count) {
  questions = [];
  for (let i = 0; i < count; i++) {
    let id = Math.floor(Math.random() * 411);
    questions.push(question.getQuestion(id));
  }
}

app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);
  console.log("Server started...");
});
