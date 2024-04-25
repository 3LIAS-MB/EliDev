import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Rect.StrictMode -> sirve como advertencia si se utiliza
  // código antiguo, si se hace algo incorrecto

  // También ejecuta dos veces los efectos. Esto solo ocurre en desarrollo;
  // NO funciona en producción. Es una ayuda para desarrollar y depurar
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
