import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainJsApp from './App'

ReactDOM.render(<MainJsApp />, document.getElementById('root')
)

serviceWorker.unregister()