const MINUTE_CONSTANT = 1000 * 60;
const HOUR_CONSTANT = 1000*60*60;
const DAYS_CONSTANT = 24*60*60*1000;

function getSecondsFromMili(timeLeft) {
    return Math.floor((timeLeft / 1000) % 60)
  }

function getMinutesFromMili(timeLeft) {
  return Math.floor((timeLeft / (MINUTE_CONSTANT)))
}

function getSecondsLeftInMili(timeLeft, minutesLeft){
  return timeLeft - (minutesLeft * MINUTE_CONSTANT)
}

function getHoursFromMili(timeLeft) {
  return Math.floor((timeLeft / (HOUR_CONSTANT)))
}

function getMinutesLeftInMili(timeLeft, hoursLeft){
  return timeLeft - (hoursLeft * HOUR_CONSTANT)
}

function getDaysFromMili(timeLeft){
  return Math.floor((timeLeft / (DAYS_CONSTANT)))
}

function getHoursLeftInMili(timeLeft, daysLeft){
  return timeLeft - (daysLeft * DAYS_CONSTANT)
}

// function getTimeFromMili(timeLeft, unit){
//   return Math.floor((timeLeft / (getUnitConstant(unit))))
// }
//
// function getUnitConstant(unit){
//   switch (unit) {
//     case 'minute':
//       return MINUTE_CONSTANT;
//     case 'hour':
//       return HOUR_CONSTANT;
//     case 'day':
//       return DAYS_CONSTANT
//     default:
//       0;
//   }
// }

const transformer = {
  getSecondsFromMili,
  getMinutesFromMili,
  getHoursFromMili,
  getSecondsLeftInMili,
  getMinutesLeftInMili,
  getDaysFromMili,
  getHoursLeftInMili,
}

export default transformer;
