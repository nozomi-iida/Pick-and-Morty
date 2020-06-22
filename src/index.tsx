import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvidor } from './Store';

ReactDOM.render(
  <StoreProvidor>
      <App />
  </StoreProvidor>, 
  document.getElementById('root')
);
