import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

import {contentStyle, InputField, actions} from './consts.js'

export default props => {
  const {open, url, openDialog, closeDialog, changeUrl} = props
  return (
    <div>
      <RaisedButton label="Create" onTouchTap={openDialog} />
      <Dialog
        title="Create Item"
        model={false}
        open={open}
        contentStyle={contentStyle}
        onRequestClose={closeDialog}
        actions={actions(props)}
      >
        <InputField
          label="Title"
          onChange={(e, val) => changeUrl({title: val})} />
        <InputField
          label="URL"
          onChange={(e, val) => changeUrl({url: val})} />
      </Dialog>
    </div>
  )
}
