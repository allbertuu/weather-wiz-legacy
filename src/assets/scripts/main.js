import moment from 'moment';

let body = document.body;

export const currentTime = moment().format('LT');
export const dayOfTheWeekABBR = moment().format('dddd').slice(0, 3);
export const dayOfTheWeek = moment().format('dddd');

function getTimeFormatAM_PM() {
  let lastIndex = currentTime[currentTime.length - 1];
  let penultimateIndex = currentTime[currentTime.length - 2];
  return penultimateIndex + lastIndex;
}

function getHour() {
  let arrTime = currentTime.split(':');
  let extractedHour = arrTime[0];
  return extractedHour;
}

export function handleBodyStyles() {
  let hour = getHour();
  let timeFormat = getTimeFormatAM_PM();

  if (timeFormat === 'PM') {
    if (hour >= '6') {
      body.className = 'night';
    }
  }
  else if (timeFormat === 'AM') {
    if (hour < '6') {
      body.className = 'night';
    }
    else if (hour >= '6') {
      body.classList.remove('night');
    }
  }
}