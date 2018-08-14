const UPDATE_DAY = 'UPDATE_DAY'
const UPDATE_HOUR = 'UPDATE_HOUR'
const UPDATE_MINUTE = 'UPDATE_MINUTE'
const UPDATE_SECOND = 'UPDATE_SECOND'

const initState = {
  day: 0,
  hour: 0,
  minute: 0,
  second: 0
}

const updateDay = (day) => ({type: UPDATE_DAY, payload: day})

const updateHour = (hour) => ({type: UPDATE_HOUR, payload: hour})

const updateMinute = (minute) => ({type: UPDATE_MINUTE, payload: minute})

const updateSecond = (second) => ({type: UPDATE_SECOND, payload: second})

export const updateUnit = ({name, value}) =>{
  switch (name) {
    case 'day':
        return updateDay(value)
    case 'hour':
        return updateHour(value)
    case 'minute':
        return updateMinute(value)
    case 'second':
        return updateSecond(value)
    default:
      console.log("Error unit not Identified");
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_DAY:
      return {...state, day: action.payload};
    case UPDATE_HOUR:
      return {...state, hour: action.payload};
    case UPDATE_MINUTE:
      return {...state, minute: action.payload};
    case UPDATE_SECOND:
      return {...state, second: action.payload};
    default:
        return state;
  }
}
