// VARIABLE
const header = document.querySelector("header");
const NewCountDownBtn = document.getElementById("add_new");
const countDownSetterDiv = document.getElementById("count_down_setter");
const countDownDisplay = document.getElementById("count_down_display");
const addNewCountDownBtn = document.getElementById("add_timer");

// FUNCTION
function setNewCountDown() {
    countDownSetterDiv.style.display = "block";
}

function createNewCountDown() {
    const timerContainer = document.createElement("div");
    const timerInfo = document.createElement("div");
    const timerDisplay = document.createElement("div");
    const timerControl = document.createElement("div");

    timerContainer.className = "display";
    timerInfo.className = "display_info";
    timerDisplay.className = "timer_display";
    timerControl.className = "timer_control";


    const hourSpan = document.createElement("span");
    const minuteSpan = document.createElement("span");
    const secondSpan = document.createElement("span");

    hourSpan.textContent = "00";
    minuteSpan.textContent = "00";
    secondSpan.textContent = "00";

    const pauseBtn = document.createElement("button");
    const playBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
    const moreMenuBtn = document.createElement("button");

    pauseBtn.className = "pause_btn";
    playBtn.className = "play_btn";
    resetBtn.className = "reset_btn";
    moreMenuBtn.className = "more_menu";

    //     const moreMenuBtnImg = assests/more.png;
    //     const pauseIMg = assests/pause.png;
    //     const playIMg = assests/play.png;
    //     const resetIMg = assests/reset.png;

    //    moreMenuBtn.append(moreMenuBtnImg); 


    header.appendChild(timerContainer)
}

function addNewCountDown() {
    countDownSetterDiv.style.display = "none";
    createNewCountDown()
}

// EVENTS
NewCountDownBtn.addEventListener("click", setNewCountDown);
addNewCountDownBtn.addEventListener("click", addNewCountDown)