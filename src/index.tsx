import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StoreProvidor } from './Store';
import  { Router, RouteComponentProps  } from '@reach/router';
import HomePage from './HomePage';
import FavPage from './FavPage';

const RouterPage  = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent
ReactDOM.render(
  <StoreProvidor>
    <Router>
       <App path='/' >
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/faves' />
       </App>
    </Router>
  </StoreProvidor>, 
  document.getElementById('root')
);
