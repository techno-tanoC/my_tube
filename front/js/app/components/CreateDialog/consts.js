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
  if (url) {
    createItem(url, (err, res) => {
      reload()
    })
    closeDialog()
  }
}

export const actions = props => [
  <FlatButton
    label="Cancel"
    onTouchTap={props.closeDialog} />,
  <FlatButton
    label="Submit"
    primary={true}
    disabled={!props.url}
    onTouchTap={() => postItem(props)} />
]
