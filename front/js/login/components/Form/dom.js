import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import request from 'superagent'

const login = (name, pass) => {
}

export default ({name, pass, onChange}) => {
  return (
    <div>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        onChange={(e, val) => onChange({name: val})} />
      <br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        onChange={(e, val) => onChange({pass: val})} />
      <br />
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={() => {}} />
    </div>
  )
}
