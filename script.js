let startTimerBtn = document.getElementById("start-timer-btn");
let countdown = 60;
startTimerBtn.addEventListener("click", function() 
{
    let countdown = 60;
let intervalId = setInterval(function() {
  countdown--;
  document.getElementById("timer").innerHTML = countdown;
}, 1000);
});
if (countdown <= 0) {
    clearInterval(intervalId);
    alert("Time's up!");
  }

       