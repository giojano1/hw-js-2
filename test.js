let mainQuest = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
let question;
let answer;
switch (mainQuest) {
  case "1":
    question = prompt(`რა არის რა არის typeof(5)`);
    if (
      question === `number` ||
      question === "NUMBER" ||
      question === "NumBer"
    ) {
      alert(`სწორი პასუხია`);
    } else {
      alert(`არასწორი პასუხია`);
    }
    break;
  case "2":
    question = prompt(`შეიძლება თუ არა let-ის რედეკლალირება`);
    if (question === `Yes` || question === "yes" || question === "YeS") {
      alert(`სწორი პასუხია`);
    } else {
      alert(`არასწორი პასუხია`);
    }
    break;
  case "3":
    question = prompt(`რას აბრუნებს console.log(Math.floor(2.1))`);
    if (question === `ori` || question === "ORI" || question === "oRi") {
      alert(`სწორი პასუხია`);
    } else {
      alert(`არასწორი პასუხია`);
    }
    break;
  default:
}
