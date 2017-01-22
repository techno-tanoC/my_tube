import {combineReducers} from 'redux'
import {Seq} from 'immutable'

import {
  SET_ITEMS,
  UPDATE_CREATE_DIALOG
} from '../actions'

const items = (state = Seq(), action) => {
  switch (action.type) {
    case SET_ITEMS:
      return Seq(action.payload)
    default:
      return state
  }
}

const createDialog = (state = {open: false, title: "", url: ""}, action) => {
  switch (action.type) {
    case UPDATE_CREATE_DIALOG:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default combineReducers({
  items,
  createDialog
})
