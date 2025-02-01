import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import AuthProvider from './Auth/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>

      <Router>
          <App />

        </Router>
  </AuthProvider>
    
  </StrictMode>,
)
