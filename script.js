const dateContainer = document.querySelector(".dateContainer");
const timeHolder = document.createElement("p");
dateContainer.appendChild(timeHolder);
const dateHolder = document.createElement("p");
dateContainer.appendChild(dateHolder);

window.onload = startFunctions;

function startFunctions() {
    startClock();
}


function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formateHours(hours);
    minutes = formateMinutes(minutes);
    seconds = formateSeconds(seconds);

    timeHolder.innerHTML = hours + ":" + minutes + ":" + seconds;

    const day = getWeekday(date);
    const dayOfMonth = getDayOfMonth(date);
    const month = getMonth(date);
    dateHolder.innerHTML = day + " the " + dayOfMonth + " of " + month
}

function formateHours(hours) {
    if (hours < 10) {
        return "0" + hours;
    }
    else {
        return hours;
    }
}
function formateMinutes(minutes) {
    if (minutes < 10) {
        return "0" + minutes;
    }
    else {
        return minutes;
    }
}
function formateSeconds(seconds) {
    if (seconds < 10) {
        return "0" + seconds;
    }
    else {
        return seconds;
    }
}

function getWeekday(date) {
    const weekdayIndex = date.getDay();
    switch (weekdayIndex) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

function getDayOfMonth(date) {
    const currentDate = date.getDate();
    switch (currentDate) {
        case (1 || 21 || 31): return currentDate + "st";
        case (2 || 22): return currentDate + "nd";
        case (3 || 23): return currentDate + "rd";
        default: return currentDate + "th";
    }
}

function getMonth(date) {
    const month = date.getMonth();
    switch (month) {
        case 0: return "January";
        case 10: return "November"
    }
}