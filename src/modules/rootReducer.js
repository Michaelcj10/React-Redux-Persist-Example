import { combineReducers } from 'redux'
import counter from './counter'
import payment from './payment'

export default combineReducers({
  counter,
  payment
})