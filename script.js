const dateContainer = document.querySelector(".dateContainer");
const timeHolder = document.createElement("p");
dateContainer.appendChild(timeHolder);
const dateHolder = document.createElement("p");
dateContainer.appendChild(dateHolder);

/** Starts functions on window load */
window.onload = startFunctions;

/** Functions to be started on window load */
function startFunctions() {
    startClock();
}

/** Starts the clock */
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

/** Updates and displays the current time and date */
function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatHours(hours);
    minutes = formatMinutes(minutes);
    seconds = formatSeconds(seconds);

    timeHolder.innerHTML = hours + ":" + minutes + ":" + seconds;

    const day = getWeekday(date);
    const dayOfMonth = getDayOfMonth(date);
    const month = getMonth(date);
    dateHolder.innerHTML = day + " the " + dayOfMonth + " of " + month
}

/**
 * Formats the hours to be displayed in double digits
 * @param {number} hours the current hour
 * * @returns {number} hours formatted in double digits
 */
function formatHours(hours) {
    if (hours < 10) {
        return "0" + hours;
    }
    else {
        return hours;
    }
}

/**
 * Formats the minutes to be displayed in double digits
 * @param {number} minutes the current minute
 * * @returns {number} minutes formatted in double digits
 */
function formatMinutes(minutes) {
    if (minutes < 10) {
        return "0" + minutes;
    }
    else {
        return minutes;
    }
}

/**
 * Formats the seconds to be displayed in double digits
 * @param {number} seconds the current second
 * @returns {number, string} seconds formatted in double digits
 */
function formatSeconds(seconds) {
    if (seconds < 10) {
        return "0" + seconds;
    }
    else {
        return seconds;
    }
}

/**
 * Changes the date to name of weekday
 * @param {number} date the current date
 * * @returns {string} the name of current weekday
 */
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

/**
 * Formats the day of the month
 * @param {number} date the current date
 * @returns {number, string} formatted day of the month
 */
function getDayOfMonth(date) {
    const currentDate = date.getDate();
    switch (currentDate) {
        case (1 || 21 || 31): return currentDate + "st";
        case (2 || 22): return currentDate + "nd";
        case (3 || 23): return currentDate + "rd";
        default: return currentDate + "th";
    }
}

/**
 * Changes the date to name of month
 * @param {number} date the current date
 * @returns {string} name of current month
 */
function getMonth(date) {
    const month = date.getMonth();
    switch (month) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "Oktober";
        case 10: return "November";
        case 11: return "December";
    }
}