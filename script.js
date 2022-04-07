let instructions = document.querySelector('#instructions');

instructions.innerHTML = `<h2>Hit the 'Start' button to test your Javascript knowledge. Try to answer the following questions within the
given time limit. Keep in mind that any incorrect answers will result with a penalty of subtracting 10 seconds from your time limit. Each correct answer will result in +5 seconds.</h2>`;

// when user clicks 'start', instructions will go away
let startBtn = document.getElementById('start');

startBtn.addEventListener('click', function () {
    let instructions = document.querySelector('#instructions');
    instructions.innerHTML = "";

    let countdownEl = document.querySelector('#countdown');
    countdownEl.innerHTML = `${timeLeft}`;

    var timeLeft = 10;
    var downloadTimer = setInterval(function () {
        if  (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "GAME OVER";
        } else {
            document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
        }
     timeLeft -= 1;
    }, 1000);



});



// after user clicks 'start' timer will start and countdown

// if time runs out then game over => take user to scoreboard

// ----------------------------------------------------------------------------------------

// after user clicks 'start' user will be prompted with a question

// user will be taken to next question regardless of wrong or right answer

// ----------------------------------------------------------------------------------------

// create a function so that if the user chooses a wrong answer, 10 seconds will be deducted otherwise, +5 seconds

// create a function that keeps score

// ----------------------------------------------------------------------------------------

// create localstorage to keep score

// populate score on scoreboard page

// ----------------------------------------------------------------------------------------
