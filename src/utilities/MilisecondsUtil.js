const SECOND_CONSTANT = 1000
const MINUTE_CONSTANT = 1000 * 60;
const HOUR_CONSTANT = 1000*60*60;
const DAYS_CONSTANT = 24*60*60*1000;

function getSecondsFromMili(timeLeft) {
    return Math.floor((timeLeft / 1000) % 60)
  }

function getTimeFromMili(timeLeft, unit){
  return Math.floor((timeLeft / (getUnitConstant(unit))))
}

function getTimeLeftInMili(timeLeft, unitLeft, unit){
  return timeLeft - (unitLeft * getUnitConstant(unit))
}

function getTimeInMili(time, unit){
  return (time * getUnitConstant(unit))
}

function getUnitConstant(unit){
  switch (unit) {
    case 'minute':
      return MINUTE_CONSTANT;
    case 'hour':
      return HOUR_CONSTANT;
    case 'day':
      return DAYS_CONSTANT;
    case 'second':
      return SECOND_CONSTANT;
    default:
      return 0;
  }
}

const miliUtil = {
  getSecondsFromMili,
  getTimeFromMili,
  getTimeLeftInMili,
  getTimeInMili
}

export default miliUtil;
