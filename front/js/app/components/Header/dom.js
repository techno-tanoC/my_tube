import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './styles.js'
import {logout} from '../../utils/request.js'

export default () => {
  return (
    <AppBar
      title="MyTube"
      style={styles.header}
      iconElementRight={
        <RaisedButton
          label="Logout"
          onTouchTap={logout} />
      }
    />
  )
}
