import React from 'react'
import AppBar from 'material-ui/AppBar'

import styles from './styles.js'
import CreateDialog from '../CreateDialog'

export default () => {
  return (
    <AppBar
      title="MyTube"
      style={styles.header}
      iconElementRight={<CreateDialog />}
    />
  )
}
