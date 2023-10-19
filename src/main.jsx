import React from 'react'
import ReactDOM from 'react-dom/client'
import {Action} from './App.jsx'
import {Option} from './App.jsx'
import {Receiver} from './App.jsx'
import './index.css'
//Se importan los componentes desde App para ser utilizados

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Se recibe los componentes creados de la App */}
    <Option />
    <Receiver/>
    <Action />
  </React.StrictMode>,
)
