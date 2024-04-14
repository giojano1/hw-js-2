let mainQuest = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
let question;
let answer;
switch (mainQuest) {
  case "1":
    question = prompt(`რა არის რა არის typeof(5)`);
    answer = "number";
    break;
  case "2":
    question = prompt(`შეიძლება თუ არა let-ის რედეკლალირება`);
    answer = "yes" || "YES" || "YeS";
    break;
  case "3":
    question = prompt(`რას აბრუნებს console.log(Math.floor(2.1))`);
    answer = "ori" || "ORI" || "oRi";
    break;
  default:
    alert("not found");
}
if (question === answer.toLowerCase()) {
  alert("სწორი პასუხია");
} else {
  alert("არასწორი პასუხია");
}
