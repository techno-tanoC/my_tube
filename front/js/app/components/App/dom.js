import React, {Component} from 'react'

import Header from '../Header'
import ItemList from '../ItemList'

export default class App extends Component {
  componentDidMount() {
    this.props.onMounted()
  }

  render() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    )
  }
}
