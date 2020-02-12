import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ClassicProvider } from './contexts/classicContext'
import App from './App';
import './index.css';

ReactDOM.render(  
  <BrowserRouter>
    <ClassicProvider>
      <App />
    </ClassicProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);