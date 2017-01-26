import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete'

import {deleteItem} from '../../utils/request.js'
import OverlayLink from '../OverlayLink'
import {thumb} from './consts.js'
import styles from './styles.css'

export default ({id, title, url, reload}) => {
  return (
    <div className={styles.wrapper}>
      <OverlayLink title={title} url={url}>
        <div className={styles.paper}>
          <img src={thumb(url)} className={styles.thumb} />
          <div className={styles.title}>
            <div className={styles.titleWrapper}>
              {title}
            </div>
          </div>
          <IconButton className={styles.deleteButton}>
            <Delete onClick={() => {
              deleteItem(id, () => reload())
            }}/>
          </IconButton>
        </div>
      </OverlayLink>
    </div>
  )
}
