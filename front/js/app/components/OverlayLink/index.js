import React from 'react'

import styles from './styles.css'

export default ({url, children}) => {
  return (
    <div className={styles.overlay}>
      <a href={url} className={styles.overlayLink} target="_blank"></a>
      {children}
    </div>
  )
}
