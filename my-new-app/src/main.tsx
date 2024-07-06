import './index.css'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import React from 'react'

const element = document.getElementById('root')
const root = createRoot(element)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
