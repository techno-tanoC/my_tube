import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'

import {contentStyle, InputField, actions} from './consts.js'
import styles from './styles.css'

export default props => {
  const {open, url, openDialog, closeDialog, changeUrl} = props
  return (
    <div>
      <FloatingActionButton className={styles.floatingButton} onClick={openDialog}>
        <ContentAdd />
      </FloatingActionButton>
      <Dialog
        title="Create Item"
        model={false}
        open={open}
        contentStyle={contentStyle}
        onRequestClose={closeDialog}
        actions={actions(props)}
      >
        <InputField
          label="URL"
          onChange={(e, val) => changeUrl({url: val})} />
      </Dialog>
    </div>
  )
}
