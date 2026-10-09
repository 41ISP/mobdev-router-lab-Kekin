import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowseRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRouter>
    <App />
    </BrowseRouter>
  </React.StrictMode>
);
