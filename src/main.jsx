import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import AuthProvider from './context/authContext.jsx';
import PredictionProvider from './context/PredictionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PredictionProvider>
          <App />
        </PredictionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)