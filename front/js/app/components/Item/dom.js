import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete'
import Create from 'material-ui/svg-icons/content/create'

import {deleteItem} from '../../utils/request.js'
import OverlayLink from '../OverlayLink'
import {thumb} from './consts.js'
import styles from './styles.css'

export default ({id, title, url, reload}) => {
  return (
		<Card className={styles.cardMargin}>
      <OverlayLink url={url}>
        <img src={thumb(url)} width="196px" height="110px" />
        {title}
      </OverlayLink>
        <IconButton>
          <Delete onClick={() => {
            deleteItem(id)
            reload()
          }}/>
        </IconButton>
    </Card>
  )
}
