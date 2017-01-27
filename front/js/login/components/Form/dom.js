import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import {submit} from './consts.js'
import styles from './styles.css'

const login = (name, pass) => {
}

export default ({name, pass, onChange}) => {
  return (
    <div className={styles.center}>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        onChange={(e, val) => onChange({name: val})} />
      <br />
      <TextField
        type="password"
        hintText="Password"
        floatingLabelText="Password"
        onChange={(e, val) => onChange({pass: val})} />
      <br />
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={() => submit(name, pass)} />
    </div>
  )
}
