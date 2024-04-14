let mainQuest = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
let question;
let answer;

switch (mainQuest) {
  case "1":
    question = `რა არის რა არის typeof(5)`;
    answer = "number";
    break;
  case "2":
    question = `შეიძლება თუ არა let-ის რედეკლალირება`;
    answer = "yes";
    break;
  case "3":
    question = `რას აბრუნებს console.log(Math.floor(2.1))`;
    answer = "ori";
    break;
  default:
    alert("not found");
}
let answerUpdate = prompt(question);
if (answer.toLowerCase() === answerUpdate.toLowerCase()) {
  alert("სწორი პასუხია");
} else {
  alert("არასწორი პასუხია");
}
