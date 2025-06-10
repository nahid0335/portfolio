import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//▼[change] 2025/06/10
//import './index.css'
import './assets/css/main.css';
import './assets/css/normalize.min.css';
import './assets/css/font-awesome.min.css';
//▲[change] 2025/06/10

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
