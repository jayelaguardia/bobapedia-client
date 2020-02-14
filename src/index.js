import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ClassicProvider } from './contexts/classicContext'
import { CreationProvider } from './contexts/creationContext'
import App from './App';
import './index.css';

ReactDOM.render(  
  <BrowserRouter>
    <ClassicProvider>
      <CreationProvider>
        <App />
      </CreationProvider>
    </ClassicProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);