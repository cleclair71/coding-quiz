let score = 0;
let highScores = [];

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

function showNextQuestion() {
  document.getElementById("question" + currentQuestion).style.display = "none";
  currentQuestion++;
  document.getElementById("question" + currentQuestion).style.display = "block";
}

// hide on load
window.onload = function() {
  document.getElementById("startingpage").style.display = "block";
  for (var i = 1; i <= 6; i++) {
    document.getElementById("question" + i).style.display = "none";
  }
};

document.getElementById("start-timer-btn").addEventListener("click", function () {
  document.getElementById("question2").style.display = "block";
  // hide divs

document.getElementById("strings-btn").addEventListener("click", function() {
  // code to check if answer is correct
  showNextQuestion();
});

//   // Timer
let countdown = 60;
let intervalId = setInterval(function () {
  countdown--;
  document.getElementById("timer").innerHTML = countdown;
  if (countdown <= 0) {
    clearInterval(intervalId);
    alert("Time's up!");
    stopQuiz();
  }
}, 1000); 
});
// hide divs
var elements = document.querySelectorAll("#startingpage, #alldone, #question3, #question4, #question5, #question6");
  elements.forEach(function(element){
    element.style.display = "none";
  });

// Start Page
let startTimerBtn = document.getElementById("start-timer-btn");
startTimerBtn.addEventListener("click", function () {
    document.getElementById("question2").style.display = "block";
  // 
  // var elements = document.querySelectorAll("#startingpage, #alldone, #question3, #question4, #question5, #question6");
  // elements.forEach(function(element){
  //   element.style.display = "none";
  // });


//QUESTION 2 - add event listener to right answer
let rightAnswerBtn = document.getElementById("alerts-btn");
rightAnswerBtn.addEventListener("click", function(){
    score += 10;
    highScores.push(score);
    showNextQuestion();
    // document.getElementById("question3").style.display = "block";
    // document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question4, #question5").forEach(function(element){
    //     element.style.display = "none";
    // });
});

//WRONG ANSWERS DONT WORK
//add event listener to wrong answers
let wrongAnswerBtns = document.querySelectorAll("#strings-btn, #booleans-btn, #numbers-btn");
wrongAnswerBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        countdown -= 10;
        document.getElementById("question" + currentQuestion).innerHTML = "Wrong Answer";
    showNextQuestion();
        
        });
    });
});
//QUESTION 3 - add event listener to right answer
//add event listener to wrong answers
let rightAnswerBtn = document.getElementById("parenthesis-btn");
rightAnswerBtn.addEventListener("click", function(){
    score += 1;
    highScores.push(score);
    document.getElementById("question4").style.display = "block";
    document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question3, #question5, #question6").forEach(function(element){
        element.style.display = "none";
    });
});

//wrong answers
//add event listener to wrong answers
let wrongAnswerBtns = document.querySelectorAll("#quotes-btn, #curly-btn, #square-btn");
wrongAnswerBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        countdown -= 10;
        document.getElementById("question" + currentQuestion).innerHTML = "Wrong Answer";
    showNextQuestion();
        });
    });

//QUESTION 4 - add event listener to right answer
 let rightAnswerBtn = document.getElementById("quotes2-btn");
rightAnswerBtn.addEventListener("click", function(){
    score += 1;
    highScores.push(score);
    document.getElementById("question5").style.display = "block";
    document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question3, #question4, #question6").forEach(function(element){
        element.style.display = "none";
    });
});

//wrong answers
let wrongAnswerBtns = document.querySelectorAll("#commas-btn, #curly2-btn, #parenthesis2-btn");
wrongAnswerBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        countdown -= 10;
        document.getElementById("question5").style.display = "block";
        document.getElementById("question5").innerHTML = "Wrong Answer";
        document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question3, #question4, #question6").forEach(function(element){
            element.style.display = "none";
        });
    });
});
 //QUESTION 5 - add event listener to right answer
 let rightAnswerBtn = document.getElementById("console-btn");
 rightAnswerBtn.addEventListener("click", function(){
     score += 1;
     highScores.push(score);
     document.getElementById("question6").style.display = "block";
     document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question3, #question4, #question5").forEach(function(element){
         element.style.display = "none";
     });
 });
 
 //wrong answers
 let wrongAnswerBtns = document.querySelectorAll("#JS-btn, #bash-btn, #loops-btn");
 wrongAnswerBtns.forEach(function(btn){
     btn.addEventListener("click", function(){
         countdown -= 10;
         document.getElementById("question6").style.display = "block";
         document.getElementById("question6").innerHTML = "Wrong Answer";
         document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question3, #question4, #question5").forEach(function(element){
             element.style.display = "none";
         });
     });
 });
 //QUESTION 6 - add event listener to right answer
 let rightAnswerBtn = document.getElementById("above-btn");
 rightAnswerBtn.addEventListener("click", function(){
     score += 1;
     highScores.push(score);
     document.getElementById("alldone").style.display = "block";
     document.querySelectorAll("#startingpage, #question2, #question6, #question2, #question3, #question4, #question5").forEach(function(element){
         element.style.display = "none";
     });
 });
 
 //wrong answers
 let wrongAnswerBtns = document.querySelectorAll("#n&s-btn, #other-btn, #bool-btn");
 wrongAnswerBtns.forEach(function(btn){
     btn.addEventListener("click", function(){
         countdown -= 10;
         document.getElementById("alldone").style.display = "block";
         document.getElementById("alldone").innerHTML = "Wrong Answer";
         document.querySelectorAll("#startingpage, #question2, #question6, #question2, #question3, #question4, #question5").forEach(function(element){
             element.style.display = "none";
         });
     });
 });
 //ALL DONE
 
 if (currentQuestion === 6) {
  clearInterval(intervalId);
  document.getElementById("alldone").style.display = "block";
  document.getElementById("alldone").innerHTML = "Your final score is:" + score;
  let initials = input({initials: initials, score: score});
  storeQuizResults(highScores);
 }


// Timer has run down and you are returned to results page
function stopQuiz() {
    var x = document.querySelectorAll("#startingpage, #question2, #question3, #question3,#question4, question5");
    var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById("alldone").style.display = "block";
  document.getElementById("alldone").innerHTML = "You scored: " + calculateResults();
  function calculateResults() {
    return score;
}
}
