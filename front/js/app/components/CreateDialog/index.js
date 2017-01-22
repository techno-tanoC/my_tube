import {connect} from 'react-redux'

import {setItems} from '../../actions'
import {getItems} from '../../utils/request.js'
import {updateCreateDialog} from '../../actions'
import comp from './dom.js'

const mapStateToProps = ({createDialog}) => ({
  ...createDialog
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => {
    dispatch(updateCreateDialog({open: true, title: "", url: ""}))
  },
  closeDialog: () => {
    dispatch(updateCreateDialog({open: false, title: "", url: ""}))
  },
  changeUrl: change => {
    dispatch(updateCreateDialog(change))
  },
  reload: () => {
    getItems((err, res) => dispatch(setItems(res.body.data)))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(comp)
