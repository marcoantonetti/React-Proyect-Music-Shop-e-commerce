import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {initFirebase} from './firebase/config'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
    
  </React.StrictMode>,
)
