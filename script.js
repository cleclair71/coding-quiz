//variables
// var score = 0;
var initials1 = document.getElementById('initials')
var responsePrompt = document.getElementById('response');
// var quizEnd = document.getElementById('alldone');
// var gameEnd = true; 
//buttons
var startBtn = document.getElementById('start-timer-btn');
var clearBtn = document.getElementById('clear-btn')
var submit1 = document.getElementById('submit-btn');
var goBack = document.getElementById('goback-btn');
//Time
var timer1 = document.getElementById('time');
var timeLeft;
var time = questions.length = 10;
//questions
var q1 = document.getElementById('questiondivs')
var questions = quizQuestions;
var options1 = document.getElementById('options');
var header1 = document.getElementById('header-question');
var currentQuestion = quizQuestions[currentQIndex];
var currentQIndex = 0; // keeps tabs on current question


//Question list
var quizQuestions = [  {    headerQuestion: 'Commonly used data types DO Not Include:',    options: ['strings', 'booleans', 'alerts', 'numbers'],
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


function quizStart() {
  var startPage = document.getElementById('startingpage');
  startPage.setAttribute('class', 'hide');
  q1.removeAttribute('class');
  
  timeLeft = setInterval(clockTime, 1000);
  timer1.textContent = time;

  nextQuestion();
}

function nextQuestion() {
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
  }
}

function clickQ(event) {
  var btnS = event.target;

  if (!btnS.value !== quizQuestions[currentQIndex].answer) 
    // take time away
    timeLeft -= 10;

    if (timeLeft < 0) {
      timeLeft = 0;
    }

    timer1.textContent = time;

    responsePrompt.textContent = 'Wrong Answer!';
  } else {
    responsePrompt.textContent = 'Correct Answer!';
  }

  responsePrompt.setAttribute('class', 'response');
  setStop(function () {
    responsePrompt.setAttribute('class', 'response hide');
  }, 1000);
// goes to next quesitons
currentQIndex++;

if (time <= 0 || currentQIndex === quizQuestions.lengths) {
  allDone();
} else {
  nextQuestion
}
function allDone() {
clearInterval(timeLeft);
var allDonePage = document.getElementById('alldone');
allDonePage.removeAttribute('class');
// show score
var finalScore = document.getElementById('scores');
finalScore.textContent = timeLeft;

q1.setAttribute('class', 'hide');
}

//   // Timer
var clockTime = function() {
  time--;
    timer1.innerText = time;

    if (time <=0) {
      allDone();
    }
  }
function saveResults() {
var initialInput = initials1.value.trim();

if(initialInput !== '') {
  var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
  var newHigh = {
    score: time,
    initials1: initialInput.value,
  }
}

}
// function checkEnter(event) {

// }

function showHighscores() {
  highscores1.innerHTML = ''

  const highscores = JSON.parse(window.localStorage.getItem(`highscores1`)) || [];
  highscores.sort((a, b) => b.score - a.score);
  highscores.forEach((score) => {
    const scoreList = document.querySelector(`ol`);
    scoreList.innerHTML = score.user.toUpperCase() + " - " + score.score;
    highscores.append(scoreList);

  });
}

function displayState() {
    if (state === "start-timer-btn") {
      startPage.style.display = "block";
      q1.style.display = "none";
      allDonePage.style.display = "none";

    }
  }
  if (state === "questiondivs") {
    startPage.style.display = "none";
    q1.style.display = "block";
    allDonePage.style.display = "none";
  
  }
if (state === "alldone") {
  startPage.style.display = "none";
  q1.style.display = "none";
  allDonePage.style.display = "block";

}

  // if (tempArray != null) {
  //   for (let index = 0 < tempArray.length; index++) {
  //     var resultsLi = document.createElement('li')
  //     resultsLi.textContent = tempArray[index].initials + ' - ' + tempArray[index].scores;
  //     scoreList.appendChild(resultsLi);
  //   }

  // } else { // if no information is stored
  //   var resultsLi = document.createElement(`p`)
  //   resultsLi.textContent = 'No Highscores Saved'
  //   scoreList.appendChild(resultsLi);
  // }
  // return;


// function clearScores() {
//   document.querySelector(`ol`).innerHTML = ``; 
//   window.localStorage.clear();
//   return;
// }
function init() {
  displayState();
};
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clockTime();
  state = "questiondivs";
  displayState();
});

  submit1.addEventListener("click", saveResults);
  clearBtn.addEventListener("click", clearScores);
  
  options1.addEventListener("click", clickQ);
  initials1.addEventListener("click", checkEnter);

