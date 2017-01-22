import React from 'react'

import Item from '../Item'
import styles from './styles.css'

export default ({items}) => {
  return (
    <div className={styles.itemList}>
      {items.reverse().map(item =>
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url} />
      )}
    </div>
  )
}
