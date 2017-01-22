import React from 'react'
import AppBar from 'material-ui/AppBar'

import styles from './styles.js'

export default () => {
  return (
    <AppBar
      title="MyTube"
      style={styles.header}
    />
  )
}
