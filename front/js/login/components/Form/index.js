import {connect} from 'react-redux'

import {updateForm} from '../../actions'
import comp from './dom.js'

const mapStateToProps = ({form}) => ({
  ...form
})

const mapDispatchToProps = dispatch => ({
  onChange: change => {
    dispatch(updateForm(change))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(comp)
