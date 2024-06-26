// VARIABLE
const header = document.querySelector("header");
const NewCountDownBtn = document.getElementById("add_new");
const countDownSetterDiv = document.getElementById("count_down_setter");
const countDownDisplay = document.getElementById("count_down_display");
const addNewCountDownBtn = document.getElementById("add_timer");

// FUNCTION
// FUNCTION SET COUNT DOWN
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
    hourSpan.textContent = "00";
    minuteSpan.textContent = "00";
    secondSpan.textContent = "00";

    // ALL BUTTON ELEMENTS
    const pauseBtn = document.createElement("button");
    const playBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
    const moreMenuBtn = document.createElement("button");

    // ALL BUTTON CLASSNAME
    pauseBtn.className = "pause_btn";
    playBtn.className = "play_btn";
    resetBtn.className = "reset_btn";
    moreMenuBtn.className = "more_menu";

    // ALL IMG ELEMENTS
    const moreMenuBtnImg = document.createElement("img");
    const pauseIMg = document.createElement("img");
    const playIMg = document.createElement("img");
    const resetIMg = document.createElement("img");

    // ALL IMG SRC
    moreMenuBtnImg.src = "assests/more.png";
    pauseIMg.src = "assests/pause.png";
    playIMg.src = "assests/play.png";
    resetIMg.src = "assests/reset.png";

    // APPEND THE DIVS TO THEIR RESPECTIVE PARENTS 
    header.append(timerContainer)
    timerContainer.append(timerInfo);
    timerInfo.append(timerDisplay, timerControl, moreMenuBtn);

    // APPEND THE SPAN AND BUTTON INSIDE THEIR RESPECTIVE DIVS
    timerDisplay.append(hourSpan, minuteSpan, secondSpan);
    timerControl.append(pauseBtn, playBtn, resetBtn);

    // APPEND THE BUTTONS
    moreMenuBtn.append(moreMenuBtnImg);
    pauseBtn.append(pauseIMg);
    playBtn.append(playIMg);
    resetBtn.append(resetIMg);

}

// FUNCTION ADD NEW COUNT DOWN
function addNewCountDown() {
    countDownSetterDiv.style.display = "none";
    createNewCountDown()
}

// EVENTS
NewCountDownBtn.addEventListener("click", setNewCountDown);
addNewCountDownBtn.addEventListener("click", addNewCountDown)