import React from 'react'

import styles from './styles.css'

export default ({title, url, children}) => {
  return (
    <div className={styles.overlay}>
      <a href={url} title={title} className={styles.overlayLink} target="_blank"></a>
      {children}
    </div>
  )
}
