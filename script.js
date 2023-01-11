let score = 0;
let highScores = [];

// hide on load
window.onload = function() {
    var elements = document.querySelectorAll("#question2, #question3, #question4, #question5, #alldone")
    elements.forEach(function(element){
        element.style.display = "none";
    });
}
// Show Question 2
let startTimerBtn = document.getElementById("start-timer-btn");
startTimerBtn.addEventListener("click", function () {
    document.getElementById("question2").style.display = "block";
  // hide divs
  var elements = document.querySelectorAll("#startingpage, #alldone, #question3, #question4, #question5");
  elements.forEach(function(element){
    element.style.display = "none";
  });
  // Timer
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
//FIRST QUESTION - add event listener to right answer
let rightAnswerBtn = document.getElementById("alerts-btn");
rightAnswerBtn.addEventListener("click", function(){
    score += 1;
    highScores.push(score);
    document.getElementById("question3").style.display = "block";
    document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question4, #question5").forEach(function(element){
        element.style.display = "none";
    });
});

//WRONG ANSWERS DONT WORK
//add event listener to wrong answers
let wrongAnswerBtns = document.querySelectorAll("#strings-btn, #booleans-btn, #numbers-btn");
wrongAnswerBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        countdown -= 10;
        document.getElementById("question3").style.display = "block";
        document.getElementById("question3").innerHTML = "Wrong Answer";
        document.querySelectorAll("#startingpage, #question2, #alldone, #question2, #question4, #question5").forEach(function(element){
            element.style.display = "none";
        });
    });
});
//SECOND QUESTION - add event listener to right answer
//add event listener to wrong answers

//THIRD QUESTION - add event listener to right answer
 //add event listener to wrong answers
 
 //fOURTH QUESTION - add event listener to right answer
 //add event listener to wrong answers
 
 //FIFTH QUESTION - add event listener to right answer
 //add event listener to wrong answers
 
 //ALL DONE
 
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
