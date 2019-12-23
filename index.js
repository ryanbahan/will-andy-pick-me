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

form.addEventListener('submit', generateResponse)

function generateResponse() {
  event.preventDefault();
  hideEightBall();
  insertQuestion(question.value);
  insertAnswer();
  form.reset();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function hideEightBall() {
  document.querySelector('.eight-ball').style.display = "none";
}

function insertQuestion(question) {
  var questionDisplay = document.querySelector(".question-display");
  questionDisplay.innerHTML = `<div class="question-display">${question}</div>`;
}

function insertAnswer() {
  var randomInt = getRandomInt(answers.length);
  var answerDisplay = document.querySelector('.answer-display');
  answerDisplay.innerHTML = `<div class="answer-display">${answers[randomInt]}</div>`;
}
