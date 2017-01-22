import {connect} from 'react-redux'

import {setItems} from '../../actions'
import {getItems} from '../../utils/request.js'
import comp from './dom.js'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onMounted: () => {
    getItems((err, res) => dispatch(setItems(res.body.data)))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(comp)
