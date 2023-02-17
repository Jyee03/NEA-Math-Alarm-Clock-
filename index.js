const timeDisplay = document.querySelector('.clock__time');
const dateDisplay = document.querySelector('.clock__date');
const alarmButton = document.querySelector('#set-alarm');
const alarmForm = document.querySelector('#alarm-form');
const alarmInput = document.querySelector('#alarm-time');
const saveButton = document.querySelector('#save-alarm');

function updateTime() {
    // Get the current time
    const now = new Date();
  
    // Get the current hour, minute, and second
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Determine whether it's currently AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Update the time display with the current time
    timeDisplay.innerHTML = `
      <span id="hours">${hours % 12}</span>
      <span id="minutes">${padNumber(minutes)}</span>
      <span id="seconds">${padNumber(seconds)}</span>
      <span id="am-pm">${amPm}</span>
    `;
  
    // Define arrays for the days of the week and months of the year
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get the current day of the week and month
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
  
    // Update the date display with the current date
    dateDisplay.textContent = `${dayOfWeek}, ${month} ${now.getDate()}, ${now.getFullYear()}`;
  }
  