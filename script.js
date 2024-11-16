// JavaScript for Stopwatch
let timerInterval;
let time = 0; // Timer time in milliseconds
let isRunning = false;

// DOM Elements
const timeDisplay = document.getElementById("timeDisplay");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

// Format time in mm:ss:ms
function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
        .toString()
        .padStart(2, "0")}`;
}

// Start/Pause the timer
startPauseBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            time += 10;
            timeDisplay.textContent = formatTime(time);
        }, 10);
        startPauseBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
});

// Reset the timer
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    time = 0;
    timeDisplay.textContent = formatTime(time);
    startPauseBtn.textContent = "Start";
    isRunning = false;
    lapList.innerHTML = ""; // Clear laps
});

// Record a lap
lapBtn.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = formatTime(time);
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
});
