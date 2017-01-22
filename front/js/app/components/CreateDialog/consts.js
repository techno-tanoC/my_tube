import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import {createItem} from '../../utils/request.js'

export const contentStyle = {
  width: "100%",
  maxWidth: "none",
}

const fullWidth = {
  width: "100%"
}

export const InputField = ({label, onChange}) => {
  return (
    <TextField
      hintText={label}
      style={fullWidth}
      multiLine={true}
      floatingLabelText={label}
      onChange={onChange} />
  )
}

const postItem = ({title, url, reload, closeDialog}) => {
  if (title && url) {
    createItem(title, url, (err, res) => {
      closeDialog()
      reload()
    })
  }
}

export const actions = props => [
  <FlatButton
    label="Cancel"
    onTouchTap={props.closeDialog} />,
  <FlatButton
    label="Submit"
    primary={true}
    onTouchTap={() => postItem(props)} />
]
