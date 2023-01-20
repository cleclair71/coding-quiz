//TODO: High score showing up on screen
//TODO: saying right answer is wrong

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
var initialTime = 60;
var timeLeft = initialTime;
var finalScore = score + timeLeft;



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
// var time = questions.length * 10;
var intervalid;

function goBackToStart() {
  // Get the current page element and hide it
  var currentPage = document.getElementById('questiondivs');
  currentPage.setAttribute('class', 'hide');
   // Get the starting page element and remove the 'hide' class
   var startPage = document.getElementById('startingpage');
   startPage.removeAttribute('class');
 }

//! This function starts the quiz
function quizStart() {
  debugger;
  // Get the starting page element and hide it
  var startPage = document.getElementById('startingpage');
  startPage.setAttribute('class', 'hide');

  // Get the high score page element and hide it
  if(!showScorePage.classList.contains("hide")){
    showScorePage.setAttribute('class', 'hide');
}

  // Get the question divs element and remove the 'hide' class
  q1.removeAttribute('class');

  // Set the timer to 60
  timer1.textContent = initialTime;

  // Start the clock
  intervalid = setInterval(clockTime, 1000);

  // Log a click to the console
  console.log("click");

  // Set the score to 0
  score = 0;

  // Move on to the next question
  nextQuestion(currentQIndex);
}

//! This function is responsible for displaying the next question. 
// It takes in the current question index as a parameter
function nextQuestion(currentQIndex) {
  // increment currentQIndex
  currentQIndex++;
  // update currentQuestion
  currentQuestion = quizQuestions[currentQIndex];
// variable that gets the header element by id where the question will be displayed
var header1 = document.getElementById('header-question');

// sets the text content of the header element to the current question's header question
header1.textContent = currentQuestion.headerQuestion;

// clears all options on the page
options1.innerHTML = '';

// loops through the options of the current question
for (var i = 0; i < currentQuestion.options.length; i++) {
    // variable that holds the current option
    var option = currentQuestion.options[i];

    // creates a new button element
    var optionButton = document.createElement('button');

    // sets class and value attributes on the button element
    optionButton.setAttribute('class', 'option');
    optionButton.setAttribute('value', option);

    // sets the text content of the button element to be the option number and option text
    optionButton.textContent = i + 1 + '. ' + option;

    // appends the button element to the options element
    options1.appendChild(optionButton);
    console.log("click");
  }
}
//! This function function is handles the user's clicks on the answer options
function clickQ(event) {
  //get the value of the button clicked
  var btnS = event.target;

  //check if the value of the button clicked is not equal to the correct answer
  if (btnS.value !== quizQuestions[currentQIndex].answer) {
    //decrease timeLeft by 10
    timeLeft -= 10;
    // check if timeLeft is less than 0, set timeLeft to 0
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    //update the timer
    timer1.textContent = timeLeft;
    //display wrong answer
    responsePrompt.textContent = 'Wrong Answer!';
  } 
  else {
    // display correct answer
    responsePrompt.textContent = 'Correct Answer!';
    //increment score
    score++;
  }

  // show response
  responsePrompt.setAttribute('class', 'response');
  // hide response after 1 sec
  setTimeout(function () {
    responsePrompt.setAttribute('class', 'response hide');
  }, 1000);

  // increment currentQIndex
  currentQIndex++;

  // check if time is up or all questions are answered
  if (timeLeft <= 0 || currentQIndex === quizQuestions.length) {
    //clear interval
    clearInterval(timeLeft);
    //go to final page
    allDone();
  } else {
    //go to next question
    nextQuestion(currentQIndex);
    console.log("nextquestion");
  }
}

//! This function is called when the quiz is completed or the time runs out
function allDone() {
  clearInterval(intervalid);
  var finalScore = score + timeLeft;
  //stops the time left countdown.
  // clearInterval(timeLeft);
  //gets the element with the id of alldone and assigns it to a variable allDonePage
  var allDonePage = document.getElementById('alldone');
  //removes the class of hide from the element allDonePage. This will make the element visible on the webpage.
  allDonePage.removeAttribute('class', 'hide');
  q1.setAttribute('class', 'hide');
  // show score
  document.getElementById("scores").textContent = "Your final score is: " + finalScore;
  console.log("click");
}

//! Timer
function clockTime() {
  if (timeLeft <= 0) {
    clearInterval(intervalId);
    // do something here when time is up
    return;
  }
  timeLeft--;
  timer1.textContent = timeLeft;
}
  //! This function stores results
  function saveResults() {
  // get the value of the initials input field
  var initialInput = initials1.value.trim();
  
  // check if the input field is not empty
  if (initialInput !== '') {
  // if not empty, get the highscores from local storage
  var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
  // create a new object to store the score and initials
  var newHigh = {
  score: score,
  initials: initialInput,
  }
  // push the new highscore to the highscores array
  highscores.push(newHigh);
  // store the updated highscores array in local storage
  window.localStorage.setItem('highscores1', JSON.stringify(highscores));
  console.log("click");
  }
  }
//! Shows Highscore results
  function showHighscores() {
    var showScorePage = document.getElementById('highscores');
    var allDonePage = document.getElementById('alldone')
    //hide allDone page
    allDonePage.setAttribute('class', 'hide');
    //remove hide class from highscores page
    showScorePage.removeAttribute('class');
    //allDonePage.setAttribute('class', 'hide');
    var highscoreList = document.getElementById('highscore1');
    //check if highscoreList element exists in the page
    if (highscoreList) {
      //clear any existing elements in the list
      highscoreList.innerHTML = '';
      // rest of the code
    } else {
      console.error("Element with id 'highscore1' not found on the page.")
    }
    //get highscores from local storage
    var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
    //sort highscores by score
    highscores.sort((a, b) => b.score - a.score);
    //iterate over each highscore
    highscores.forEach(function (highscore) {
      //create an li element
      var li = document.createElement('li');
      //set li text to initials and score
      li.textContent = highscore.initials.toUpperCase() + " - " + highscore.score;
      //append li to the list
      highscoreList.appendChild(li);
      console.log("click");
    });
  }

//! clears highscores
var highscoreList = document.getElementById('highscore1');
var highscores = JSON.parse(window.localStorage.getItem('highscores1')) || [];
var clearScores = function () {
  //clear highscores array
  highscores = [];
  //clear elements in the list
  while (highscoreList.firstChild) {
    highscoreList.removeChild(highscoreList.firstChild);
  }

  //clear highscores from local storage
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
goBack.addEventListener("click", goBackToStart);
//clear scores button
clearBtn.addEventListener("click", clearScores);

