import {combineReducers} from 'redux'
import {Seq} from 'immutable'

import {SET_ITEMS} from '../actions'

const items = (state = Seq(), action) => {
  switch (action.type) {
    case SET_ITEMS:
      return Seq(action.payload)
    default:
      return state
  }
}

export default combineReducers({
  items
})
