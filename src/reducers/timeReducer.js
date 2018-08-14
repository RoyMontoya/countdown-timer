export const UPDATE_MILI = 'UPDATE_MILI'

const initState = {
  time: 0,
}

export const updateMiliTime = (time) => ({type: UPDATE_MILI, payload: time})

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MILI:
      return {...state, time: action.payload};
    default:
        return state;
  }
}
