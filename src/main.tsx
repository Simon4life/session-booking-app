import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SessionContextProvider from './context/session_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
    
  </React.StrictMode>,
)
