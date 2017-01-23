import React, {Component} from 'react'

import Header from '../Header'
import ItemList from '../ItemList'
import CreateDialog from '../CreateDialog'
import styles from './styles.css'

export default class App extends Component {
  componentDidMount() {
    this.props.onMounted()
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.itemList} >
          <ItemList />
        </div>
        <CreateDialog />
      </div>
    )
  }
}
