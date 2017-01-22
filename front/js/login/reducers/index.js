import {combineReducers} from 'redux'

import {UPDATE_FORM} from '../actions/'

const form = (state = {name: "", pass: ""}, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default combineReducers({
  form
})
