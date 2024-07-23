// VARIABLE
const header = document.querySelector("header");
const NewCountDownBtn = document.getElementById("add_new");
const countDownSetterDiv = document.getElementById("timer_setter");
const addNewCountDownBtn = document.getElementById("add_timer");

// COUNT DOWN SETTER VARIABLES
// FOR HOURS DISPLAY
const incrementHour = document.getElementById("increment_hour");
const decrementHour = document.getElementById("decrement_hour");
const hourDisplay = document.getElementById("hour_display");

// FOR MINUTES DISPLAY
const incrementMinutes = document.getElementById("increment_minutes");
const decrementMinutes = document.getElementById("decrement_minutes");
const minutesDisplay = document.getElementById("minutes_display");

// FOR SECONDS DISPLAY
const incrementSeconds = document.getElementById("increment_seconds");
const decrementSeconds = document.getElementById("decrement_seconds");
const secondsDisplay = document.getElementById("seconds_display");

// set hour, minutes, and seconds value to 0
let hourCount = 0;
let minutesCount = 0;
let secondsCount = 0;


// FUNCTION
// FUNCTION ADD COUNT DOWN
function addHour() {
    hourCount++;
    if (hourDisplay.innerText == 12) {
        hourCount = 0;
    }

    hourDisplay.innerText = hourCount;

}
function subHour() {
    hourCount--;
    if (hourDisplay.innerText == 0) {
        hourCount = 12;
    }

    hourDisplay.innerText = hourCount;
}
function addMinutes() {
    minutesCount++;
    if (minutesDisplay.innerText == 59) {
        minutesCount = 0;
    }

    minutesDisplay.innerText = minutesCount;

}
function subMinutes() {
    minutesCount--;
    if (minutesDisplay.innerText == 0) {
        minutesCount = 59;
    }

    minutesDisplay.innerText = minutesCount;
}
function addSeconds() {
    secondsCount++;
    if (secondsDisplay.innerText == 59) {
        secondsCount = 0;
    }

    secondsDisplay.innerText = secondsCount;

}
function subSeconds() {
    secondsCount--;
    if (secondsDisplay.innerText == 0) {
        secondsCount = 59;
    }

    secondsDisplay.innerText = secondsCount;
}
function setNewCountDown() {
    countDownSetterDiv.style.display = "block";
}

function createNewCountDown() {
    // ALL DIV ELEMENTS
    const timerContainer = document.createElement("div");
    const timerInfo = document.createElement("div");
    const timerDisplay = document.createElement("div");
    const timerControl = document.createElement("div");

    // ALL DIVS CLASSNAME
    timerContainer.className = "display";
    timerInfo.className = "display_info";
    timerDisplay.className = "timer_display";
    timerControl.className = "timer_control";

    // ALL SPAN ELEMENTS
    const hourSpan = document.createElement("span");
    const minuteSpan = document.createElement("span");
    const secondSpan = document.createElement("span");

    // ALL SPAN VALUES
    hourSpan.innerText = "00";
    minuteSpan.innerText = "00";
    secondSpan.innerText = "00";

    hourSpan.innerHTML = hourCount;
    secondSpan.innerText = secondsCount;
    minuteSpan.innerText = minutesCount;

    // ALL BUTTON ELEMENTS
    const pauseBtn = document.createElement("button");
    const playBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
    const moreBtn = document.createElement("button");

    // ALL BUTTON CLASSNAME
    pauseBtn.className = "pause_btn";
    playBtn.className = "play_btn";
    resetBtn.className = "reset_btn";
    moreBtn.className = "more_menu";

    // ALL IMG ELEMENTS
    const deleteImg = document.createElement("img");
    const moreImg = document.createElement("img");
    const pauseIMg = document.createElement("img");
    const playIMg = document.createElement("img");
    const resetIMg = document.createElement("img");

    // ALL IMG SRC
    deleteImg.src = "assests/delete.png";
    moreImg.src = "assests/more.png";
    pauseIMg.src = "assests/pause.png";
    playIMg.src = "assests/play.png";
    resetIMg.src = "assests/reset.png";

    // pauseBtn.style.opacity = "10%";
    pauseBtn.style.display = "none";
    deleteImg.style.display = "none";

    // function to play count down
    let isPause;
    playBtn.addEventListener("click", () => {
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        // pauseBtn.style.opacity = "100%";
        // playBtn.style.opacity = "10%";
        playBtn.disabled = true;
        pauseBtn.disabled = false;

        if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
            hourSpan.innerText = hourSpan.innerText - 1;
            minuteSpan.innerText = 59;
            secondSpan.innerText = 59;

            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    hourSpan.innerText = hourSpan.innerText - 1;
                    minuteSpan.innerText = 59;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
            minuteSpan.innerText = minuteSpan.innerText - 1;
            secondSpan.innerText = 59;
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    hourSpan.innerText = hourSpan.innerText - 1;
                    minuteSpan.innerText = 59;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText > 0) {
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    hourSpan.innerText = hourSpan.innerText - 1;
                    minuteSpan.innerText = 59;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText > 0) {
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText > 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    hourSpan.innerText = hourSpan.innerText - 1;
                    minuteSpan.innerText = 59;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText > 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
            minuteSpan.innerText = minuteSpan.innerText - 1;
            secondSpan.innerText = 59;
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText > 0) {
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText == 0 && minuteSpan.innerText > 0 && secondSpan.innerText == 0) {
                    minuteSpan.innerText = minuteSpan.innerText - 1;
                    secondSpan.innerText = 59;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText > 0) {
            isPause = setInterval(() => {
                secondSpan.innerText--;
                if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText < 0) {
                    secondSpan.innerText = 0;
                } else if (hourSpan.innerText == 0 && minuteSpan.innerText == 0 && secondSpan.innerText == 0) {
                    alert("Timer up ! 🎉");
                }
            }, 1000);
        }
    })

    // function to pause count down
    pauseBtn.addEventListener("click", () => {
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
        // pauseBtn.style.opacity = "10%";
        // playBtn.style.opacity = "100%";
        playBtn.disabled = false;
        pauseBtn.disabled = true;

        clearInterval(isPause);
    })

    // function to delete count down
    moreBtn.addEventListener("click", () => {
        moreImg.style.display = "none";
        deleteImg.style.display = "block";

        deleteImg.addEventListener("click", () => {
            timerContainer.remove()
        })
    })

    // function to reset count down
    /**
     I need to set the hour, minutes, and seconds count to a const variable so that 
     i can store the last state of the hour, minutes, and seconds count 
     */
    const setHour = hourCount;
    const setMinutes = minutesCount;
    const setSeconds = secondsCount;

    resetBtn.addEventListener("click", () => {
        clearInterval(isPause);

        playBtn.style.display = "block";
        pauseBtn.style.display = "none";

        hourSpan.innerText = setHour;
        minuteSpan.innerText = setMinutes;
        secondSpan.innerText = setSeconds;
    })

    // APPEND THE DIVS TO THEIR RESPECTIVE PARENTS 
    header.append(timerContainer)
    timerContainer.append(timerInfo);
    timerInfo.append(timerDisplay, timerControl, moreBtn);

    // APPEND THE SPAN AND BUTTON INSIDE THEIR RESPECTIVE DIVS
    timerDisplay.append(hourSpan, minuteSpan, secondSpan);
    timerControl.append(pauseBtn, playBtn, resetBtn);

    // APPEND THE BUTTONS
    moreBtn.append(deleteImg, moreImg);
    pauseBtn.append(pauseIMg);
    playBtn.append(playIMg);
    resetBtn.append(resetIMg);
}

// FUNCTION ADD NEW COUNT DOWN
function addNewCountDown() {
    if (hourDisplay.innerText == 0 && minutesDisplay.innerText == 0 && secondsDisplay.innerText == 0) {
        alert("count down not set !")
    } else {
        countDownSetterDiv.style.display = "none";
        createNewCountDown()
    }
}

// EVENTS
NewCountDownBtn.addEventListener("click", setNewCountDown);
addNewCountDownBtn.addEventListener("click", addNewCountDown)
incrementHour.addEventListener("click", addHour);
decrementHour.addEventListener("click", subHour);
incrementMinutes.addEventListener("click", addMinutes);
decrementMinutes.addEventListener("click", subMinutes);
incrementSeconds.addEventListener("click", addSeconds);
decrementSeconds.addEventListener("click", subSeconds);