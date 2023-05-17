const fs = require("fs");

let data = fs.readFileSync("data.json", "utf-8");

let questions = [];

questions.push(JSON.parse(data));

function getQuestion(id) {
  return questions[0][id];
}

// function shuffle(array) {
//   return [...array].sort(() => Math.random() - 0.5);
// }

// let ans = "";

// writeAnswers();

// function writeAnswers() {
//   for (let i = 101; i < 412; i++) {
//     let object = getQuestion(i);
//     let question = object.ques;
//     ans +=
//       question +
//       "?\n" +
//       object.a +
//       "\n" +
//       object.b +
//       "\n" +
//       object.c +
//       "\n" +
//       object.d +
//       "\n\n";
//   }

//   fs.writeFile("./ques.txt", ans, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Data writed");
//   });
// }

module.exports = {
  getQuestion,
  // shuffle,
};
