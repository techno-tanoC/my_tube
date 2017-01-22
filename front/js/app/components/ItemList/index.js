import {connect} from 'react-redux'

import comp from './dom.js'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(comp)
