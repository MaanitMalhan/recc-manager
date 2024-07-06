import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReccContextProvider } from './context/ReccContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReccContextProvider>
        <App />
      </ReccContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);