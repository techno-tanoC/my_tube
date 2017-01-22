import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/Header/dom.js'

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <div>
      <Header />
    </div>
  </MuiThemeProvider>,
  document.getElementById("root")
)
