export const CARDNUMBER = 'payment/CARDNUMBER'

const initialState = {
  cardNumber: ""
}

export default (state = initialState, action) => {

  switch (action.type) {
  
    case CARDNUMBER:
      return {
        ...state,
        cardNumber: action.cardNumber
      }

    default:
      return state
  }
}

export const setCardNumber = (cardNumber) => {
  
  return dispatch => {
    dispatch({
      type: CARDNUMBER,
      cardNumber
    })
  }
}
