'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysInWeek = 7;
  const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const currentDay = new Date(`${year}-${month}`);
  const totalDaysInMonth = new Date(year, month, 0).getDate();
  const startDayOfTheWeek = new Date(year, month - 1)
    .getDay() === 0 ? 7 : currentDay.getDay();
  let requiredPadding = startDayOfTheWeek - 1;
  const totalWeeksInMonth = Math
    .ceil((totalDaysInMonth + requiredPadding) / daysInWeek);
  let startDate = 1;

  let headerString = '';
  let bodyString = '';

  for (const day in dayNames) {
    headerString += (`<th>${dayNames[day]}</th>`);
  }

  for (let j = 0; j < totalWeeksInMonth; j++) {
    bodyString += `<tr>`;

    for (let i = 0; i < daysInWeek; i++) {
      if (requiredPadding > 0 || startDate > totalDaysInMonth) {
        bodyString += `<td></td>`;
        requiredPadding--;
      } else {
        bodyString += `<td>${startDate}</td>`;
        startDate++;
      }
    }
    bodyString += `</tr>`;
  }

  element.innerHTML = `
   <table>
   <tr>
       ${headerString}
   </tr>
    ${bodyString}
   </table>
  `;
}

calendarTable(2020, 4, calendar);
