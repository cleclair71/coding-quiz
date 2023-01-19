//variables
var score = 0;
var initials1 = document.getElementById('initials')
var responsePrompt = document.getElementById('response');
// var quizEnd = document.getElementById('alldone');
// var gameEnd = true; 
//buttons
var startBtn = document.getElementById('start-timer-btn');
var clearBtn = document.getElementById('clear-btn')
var submit1 = document.getElementById('submit-btn');
var goBack = document.getElementById('goback-btn');
var hsBtn = document.getElementById('hs-btn')
//Time
var timer1 = document.getElementById('time');
var timeLeft = 60



//Question list
var quizQuestions = [{
  headerQuestion: 'Commonly used data types DO Not Include:', options: ['strings', 'booleans', 'alerts', 'numbers'],
  answer: 'alerts',
},
{
  headerQuestion: 'The Condition in an if / else statement is enclosed with _______.',
  options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
  answer: 'parentheses',
},
{
  headerQuestion: 'A very useful tool used during development and debugging for printing content to the debugger is:',
  options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
  answer: 'console.log',
},
{
  headerQuestion: 'String values must be enclosed within _____ when being assigned to variables.',
  options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
  answer: 'quotes',
},
{
  headerQuestion: 'Arrays in JavaScript can be used to store:',
  options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
  answer: 'all of the above',
},
];

//questions
var showScorePage = document.getElementById('highscores');
var q1 = document.getElementById('questiondivs');
var questions = quizQuestions;
var options1 = document.getElementById('options');
var header1 = document.getElementById('header-question');

var currentQIndex = 0; // keeps tabs on current question
var currentQuestion = quizQuestions[currentQIndex];
var time = questions.length * 10;

function quizStart() {
  // Get the starting page element and hide it
  var startPage = document.getElementById('startingpage');
  startPage.setAttribute('class', 'hide');

  // Get the high score page element and hide it
  showScorePage.setAttribute('class', 'hide');

  // Get the question divs element and remove the 'hide' class
  q1.removeAttribute('class');

  // Set the timer to 60
  timer1.textContent = 60;

  // Start the clock
  timeLeft = setInterval(clockTime, 1000);

  // Log a click to the console
  console.log("click");

  // Set the score to 0
  score = 0;

  // Move on to the next question
  nextQuestion(currentQIndex);
}

function nextQuestion(currentQIndex) {
  var currentQuestion = quizQuestions[currentQIndex];
  var header1 = document.getElementById('header-question');
  header1.textContent = currentQuestion.headerQuestion;

  options1.innerHTML = '';

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];
    var optionButton = document.createElement('button');
    optionButton.setAttribute('class', 'option');
    optionButton.setAttribute('value', option);

    optionButton.textContent = i + 1 + '. ' + option;

    options1.appendChild(optionButton);
    console.log("click");
  }
}

function clickQ(event) {
  var btnS = event.target;

  if (btnS.value !== quizQuestions[currentQIndex].answer) {
    // take time away
    timeLeft -= 10;

    if (timeLeft < 0) {
      timeLeft = 0;
    }

    timer1.textContent = timeLeft;

    responsePrompt.textContent = 'Wrong Answer!';
  } else {
    responsePrompt.textContent = 'Correct Answer!';
    score++;
  }

  responsePrompt.setAttribute('class', 'response');
  setTimeout(function () {
    responsePrompt.setAttribute('class', 'response hide');
  }, 1000);
  // goes to next quesitons
  currentQIndex++;

  if (time <= 0 || currentQIndex === quizQuestions.length) {
    clearInterval(timeLeft);
    allDone();
  } else {
    nextQuestion(currentQIndex);
    console.log("click");
  }

}

function allDone() {
  clearInterval(timeLeft);
  var allDonePage = document.getElementById('alldone');
  allDonePage.removeAttribute('class', 'hide');
  // show score
  document.getElementById("scores").innerHTML = score;
  score.textContent = timeLeft;

  q1.setAttribute('class', 'hide');
  console.log("click");
}

//   // Timer
var clockTime = function () {
  time--;
  timer1.innerText = time;

  if (time <= 0) {
    allDone();
  }
}

function saveResults() {
  var initialInput = initials1.value.trim();

  if (initialInput !== '') {
    var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
    var newHigh = {
      score: score,
      initials: initialInput,
    }
    highscores.push(newHigh);
    window.localStorage.setItem('highscores1', JSON.stringify(highscores));
    console.log("click");
  }
}
// function checkEnter(event) {

// }

function showHighscores() {
  var showScorePage = document.getElementById('highscores');
  var allDonePage = document.getElementById('alldone')
  allDonePage.setAttribute('class', 'hide');
  showScorePage.removeAttribute('class');
  // allDonePage.setAttribute('class', 'hide');
  var highscoreList = document.getElementById('highscore1');
  if (highscoreList) {
    highscoreList.innerHTML = '';
    // rest of the code
  } else {
    console.error("Element with id 'highscore1' not found on the page.")
  }
  var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
  highscores.sort((a, b) => b.score - a.score);
  highscores.forEach(function (highscore) {
    var li = document.createElement('li');
    li.textContent = highscore.initials.toUpperCase() + " - " + highscore.score;
    highscoreList.appendChild(li);
    console.log("click");
  });
}

//clears high scores
var highscoreList = document.getElementById('highscore1');
var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
var clearScores = function () {
  highscores = [];

  while (highscoreList.firstChild) {
    highscoreList.removeChild(highscoreList.firstChild);
  }

  localStorage.clear(highscores);

} 

showHighscores()

//click, start game
startBtn.addEventListener('click', quizStart);

console.log("click");

options1.addEventListener("click", clickQ);
hsBtn.addEventListener('click', showHighscores);
//on submit button
var submit1 = document.getElementById('submit-btn');
submit1.addEventListener('click', function () {
  showHighscores();
  console.log("click")
});

//Go back button
goBack.addEventListener("click", quizStart);
//clear scores button
clearBtn.addEventListener("click", clearScores);

