var answers = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful.",
]

var form = document.querySelector("form");
var question = document.querySelector(".question");
var clearBtn = document.querySelector(".clear-form");

form.addEventListener('submit', generateResponse)
form.addEventListener('input', checkFormValidity)
clearBtn.addEventListener('click', clearForm)

function generateResponse() {
  event.preventDefault();
  hideEightBall();
  insertQuestion(question.value);
  insertAnswer();
  enableClearBtn();
  form.reset();
  checkFormValidity();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function hideEightBall() {
  document.querySelector('.eight-ball').style.display = "none";
}

function insertQuestion(question) {
  var questionDisplay = document.querySelector(".question-display");
  questionDisplay.innerHTML = `<div class="question-display"><em>"${question}"</em></div>`;
}

function insertAnswer() {
  var randomInt = getRandomInt(answers.length);
  var answerDisplay = document.querySelector('.answer-display');
  answerDisplay.innerHTML = `<div class="answer-display">${answers[randomInt]}</div>`;
}

function checkFormValidity() {
  if (form.checkValidity() === true) {
    document.querySelector('.submit-btn').removeAttribute('disabled');
  } else {
    document.querySelector('.submit-btn').setAttribute('disabled', "");
  }
}

function clearForm() {
  document.querySelector('.eight-ball').style.display = "block";
  document.querySelector('.question-display').innerHTML = "";
  document.querySelector('.answer-display').innerHTML = "";
  clearBtn.setAttribute('disabled', "");
}

function enableClearBtn() {
  if (document.querySelector(".answer-display") != null) {
    clearBtn.removeAttribute('disabled');
  }
}
