const timerEl = document.getElementById("timer");
const questionContainer = document.querySelector(".question-container");
const questionEl = document.querySelector(".question");
const choicesEL = document.querySelectorAll(".choices");
const result = document.getElementById("result");
const formEl = document.querySelector("#form");
// Here are all og my document selectors used
var timerSet;

let timer = 50;

let question1 = {
  question: "What is the output of the following code?: console.log(typeof [])",
  answerOptions: ["object", "array", "undefined", "string"],
  correctAnswer: "object",
};
let question2 = {
  question: "Which of the following is not a JavaScript data type?",
  answerOptions: ["number", "boolean", "null", "table"],
  correctAnswer: "table",
};
let question3 = {
  question: "What does DOM stand for?",
  answerOptions: [
    "Document Orientation Model",
    "Digital Ordinance Model",
    "Data Object Mode",
    "Document Object Model",
  ],
  correctAnswer: "Document Object Model",
};

let question4 = {
  question: "What is the difference between let and var in JavaScript?",
  answerOptions: [
    "var is block-scoped and let is function-scoped",
    "let is block-scoped and var is function-scoped",
    "let is only used for loops and var is used for variables",
    "there is no difference between the two",
  ],
  correctAnswer: "let is block-scoped and var is function-scoped",
};
// I made a functions for every question

function startGame() {
  setTimer();
  // I made a timer function to set a timer for the startGame()

  question1Func(); //I also ran this function which runs all of the other functions after the question is answered
}

function question1Func() {
  questionEl.innerText = question1.question;

  choicesEL[0].innerText = question1.answerOptions[0];
  choicesEL[1].innerText = question1.answerOptions[1];
  choicesEL[2].innerText = question1.answerOptions[2];
  choicesEL[3].innerText = question1.answerOptions[3];
  for (let i = 0; i < choicesEL.length; i++) {
    choicesEL[i].setAttribute("style", "width:150px;");
  }//I attached the event listener to my container so it would identify the answer by the data-type
  questionContainer.addEventListener("click", function (e) {
    var element = e.target;
    var type = element.getAttribute("data-type");
    if (type == 1) {
      result.innerText = "Correct!";
      result.setAttribute(
        "style",
        " color: green; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
      );
    } else {
      result.innerText = "Wrong!";
      result.setAttribute(
        "style",
        " color: red; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
      );
      timer = timer - 5;
      // I subtracted 5 to the timer every time the question is wrong
    }
    question2Func();
  });
}

function question2Func() {
  questionEl.innerText = question2.question;
  choicesEL[0].innerText = question2.answerOptions[0];
  choicesEL[1].innerText = question2.answerOptions[1];
  choicesEL[2].innerText = question2.answerOptions[2];
  choicesEL[3].innerText = question2.answerOptions[3];
  for (let i = 0; i < choicesEL.length; i++) {
    choicesEL[i].setAttribute("style", "width:150px;");
  }
  questionContainer.addEventListener("click", function (e) {
    var element = e.target;
    var type = element.getAttribute("data-type");
    if (type == 4) {
      result.innerText = "Correct!";
      result.setAttribute(
        "style",
        " color: green; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
      );
    } else {
      result.innerText = "Wrong!";
      result.setAttribute(
        "style",
        " color: red; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
      );
      timer;
    }
    question3Func();
  });
  function question3Func() {
    questionEl.innerText = question3.question;
    choicesEL[0].innerText = question3.answerOptions[0];
    choicesEL[1].innerText = question3.answerOptions[1];
    choicesEL[2].innerText = question3.answerOptions[2];
    choicesEL[3].innerText = question3.answerOptions[3];
    for (let i = 0; i < choicesEL.length; i++) {
      choicesEL[i].setAttribute("style", "width:250px;");
    }
    questionContainer.addEventListener("click", function (e) {
      var element = e.target;
      var type = element.getAttribute("data-type");
      if (type == 4) {
        result.innerText = "Correct!";
        result.setAttribute(
          "style",
          " color: green; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
        );
      } else {
        result.innerText = "Wrong!";
        result.setAttribute(
          "style",
          " color: red; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
        );
        timer;
      }
      question4Func();
    });
  }
  function question4Func() {
    questionEl.innerText = question4.question;
    choicesEL[0].innerText = question4.answerOptions[0];
    choicesEL[1].innerText = question4.answerOptions[1];
    choicesEL[2].innerText = question4.answerOptions[2];
    choicesEL[3].innerText = question4.answerOptions[3];
    for (let i = 0; i < choicesEL.length; i++) {
      choicesEL[i].setAttribute("style", "width:250px;");
    }
    questionContainer.addEventListener("click", function (e) {
      var element = e.target;
      var type = element.getAttribute("data-type");
      if (type == 2) {
        result.innerText = "Correct!";
        result.setAttribute(
          "style",
          " color: green; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
        );
      } else {
        result.innerText = "Wrong!";
        result.setAttribute(
          "style",
          " color: red; margin-top: 2%; border-top: 2px solid black;font-size: 20px;width: 100%;"
        );
        timer;
      }
      initials();
      clearInterval(timerSet);
      // I clear the interval when the last question is answered.

    });
  }
}
function initials() {
  choicesEL.forEach((choice) => {
    choice.remove();
  });
  result.remove();
  questionEl.innerHTML = `Enter your initials here to save your score!Your final score is ${timer}`;

  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerText = "Submit";

  formEl.append(input); // append the input field to the form element
  formEl.append(button);

  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("hello");
    // Handle the submission data or redirect to another page
    let userInitials = {
      initials: input.value,
      score: timer,
    };

    localStorage.setItem("userInitials", JSON.stringify(userInitials));
    window.location = "scores.html";
    // This pushes the page to the scores.html
  });
}

function setTimer() {
  timerSet = setInterval(function () {
    timer--;
    timerEl.innerText = `Timer: ${timer}`;
    if (timer === 0) {
      // the interval is cleared if the timer is 0
      clearInterval(timerSet);
      timer = 0;
      timerEl.innerText = `Timer: 0`;
      initials();
    }
  }, 1000);
}

startGame();
