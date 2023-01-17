//Question list
var quizQuestions = [
  {
    headerQuestion: 'Commonly used data types DO Not Include:'
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  }, 
  {
    headerQuestion: 'The Condition in an if / else statement is enclosed with _______.'
    options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  }, 
  {
    headerQuestion: 'A very useful tool used during development and debugging for printing content to the debugger is:'
    options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    answer: 'console.log',
  }, 
  {
    headerQuestion: 'String values must be enclosed within _____ when being assigned to variables.'
    options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  }, 
  {
    headerQuestion: 'Arrays in JavaScript can be used to store:'
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above',
  }, 
];

//variables
let score = 0;
let highScores = [];
var time = questions.length = 10;
var timerId;
var questions = document.getElementById('quizQuestions');
var options1 = document.getElementById('options');
var header1 = document.getElementById('header-question');
var startBtn = document.getElementById('start-timer-btn');
var timer1 = document.getElementById('time');
var submit1 = document.getElementById('submit-btn');
var initials1 = document.getElementById('initials')
var responsePrompt = document.getElementById('response');
var quizEnd = document.getElementById('alldone');
var currentQIndex = 0; // keeps tabs on current question
var gameEnd = true; 
var clearScores = document.getElementById('clear-btn');
var goBack = document.getElementById('goback-btn');
var currentQuestion = quizQuestions[currentQIndex];
var timerPreset = 60;
var timeLeft = timerPreset;
var clearBtn = document.getElementById('clear-btn')

function mainMenu() {
  timeLeft = timerPreset;
  timer1.textContent = timerPreset;

}
//   // Timer
function startTimer() {
  var timerInterval = setInterval(function() {
    if(gameEnd === true) { //test if game ended before anything incase needs to be stopped
      clearInterval(timerInterval); //stop
      return;
    }
      if(timeLeft < 1) { //if timer is out under 1 cause wrong answers subtract 10 seconds game ends and timer stops
        clearInterval(timerInterval); //stop 
        alert("Time's up!");
        quizEnd ();
      }

      timer1.textContent = timeLeft; //update timer
      timeLeft--; 
    }, 1000); 
return;
  }

function quizStart() {
// hide all divs
var startPage = document.getElementById('startingpage');
startPage.setAttribute('class', 'hide');

// reveal questions 
questions.removeAttribute('class');
// timer
timerId = setInterval(timerPreset, 1000);
// current time
timer1.textContent = time;
}

function nextQuestion() {
  //get the current question
var currentQuestion = quizQuestions[currentQIndex];
// Get header question
var header1 = document.getElementById('header-question');
header1.textContent = currentQuestion.headerQuestion,

options1.innerHTML = '';

// cycle through questions
for (var i = 0; i < currentQuestion.options1.length; i++) {
  // create a button per choice
  var option = currentQuestion.options1[i];
  var optionNode = document.createElement('button');
  optionNode.setAttribute('class', 'choice');
  optionNode.setAttribute('value', option);

  optionNode.textContent = i + 1 + '. ' + option;

  // show on page
  options1.appendChild(optionNode);
}
}

function clickQ(event) {
  var btnS = event.target;

  if (!btnS.matches('.option')) {
    return
  }
  if (!btnS.value !== questions[currentQIndex].answer) {
    // take time away
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timer1.textContent = timerPreset;

    responsePrompt.textContent = 'Wrong Answer!';
  } else {
    responsePrompt.textContent = 'Correct Answer!';
  }

  responsePrompt.setAttribute('class', 'response');
  setTimeout(function () {
    responsePrompt.setAttribute('class', 'response hide');
  }, 1000);
}
// goes to next quesitons
currentQIndex++;

function allDone() {
// stop time
clearInterval(timerId);
// display alldone page
var quizEnd = document.getElementById('alldone');
quizEnd.removeAttribute('class');
// show score
var finalScore = document.getElementById('score');
finalScore.textContent = timeLeft;
// hide question divs
options1.setAttribute('class', 'hide');

}

function saveResults() {
initialInput = document.querySelector ('input');
var tempArray = [];

if (initialInput.value != '' || initialInput.value != null) {
  var tempObject = {
    initials: initialInput.value,
    scores: score, 
  }
  if(window.localStorage.getItem(`highscores`) == null) { //if no data exists create a new
    tempArray.push(tempObject); 
    window.localStorage.setItem('highscores', JSON.stringify(tempArray)); // send to storage
} else { // if there's data already stored, add new data
tempArray = JSON.parse(window.localStorage.getItem('highscores'));
for (let index = 0; index <= tempArray.length; index++) {
  if (index == tempArray.length) {
    tempArray.push(tempObject);
    break; // stop loop
  } else if (tempArray[index].scores < score) {
    tempArray.splice(index, 0, tempObject);
    break;// stop loop
  }
  }
}
window.localStorage.setItem('highscores', JSON.stringify(tempArray)) 
} 
document.querySelector(`input`).value = ``;
score = 0;

}

function checkEnter(event) {

}

function showHighscores() {
  scoreList = document.querySelector(`ol`);
  scoreList.innerHTML = ''

  tempArray = JSON.parse(window.localStorage.getItem(`highscores`));
  if (tempArray != null) {
    for (let index = 0 < tempArray.length; index++) {
      var resultsLi = document.createElement('li')
      resultsLi.textContent = tempArray[index].initials + ' - ' + tempArray[index].scores;
      scoreList.appendChild(resultsLi);
    }

  } else { // if no information is stored
    var resultsLi = document.createElement(`p`)
    resultsLi.textContent = 'No Highscores Saved'
    scoreList.appendChild(resultsLi);
  }
  return;
}

function clearScores() {
  document.querySelector(`ol`).innerHTML = ``; 
  window.localStorage.clear();
  return;
}


submit1.onclick = saveResults;
clearBtn.onclick = clearScores;
startBtn.onclick = quizStart;
options1.onclick = clickQ;
initials1.onkeyup = checkEnter;












// function to store quiz results in local storage
function storeQuizResults(results) {
  localStorage.setItem("quizResults", results);
}
// function to retrieve and display quiz results in highscore.html
function displayQuizResults() {
  var results = localStorage.getItem("quizResults");
  document.getElementById("results").innerHTML = "Results: " + results;
}

var currentQuestion = 0;
let countdown = 60;

