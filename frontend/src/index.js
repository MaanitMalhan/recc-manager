import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ReccContextProvider} from './context/ReccContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReccContextProvider>
      <App />
    </ReccContextProvider>
  </React.StrictMode>
);

