export const INCREMENT = 'counter/INCREMENT'

const initialState = {
  count: 0
}

export default (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.newCount
      }

    default:
      return state
  }
}

export const increment = (newCount) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      newCount
    })
  }
}
