import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const domain1 = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <Auth0Provider
      domain='dev-qpi2rq7odh4kjotc.eu.auth0.com'
      clientId='YWFTMhMd7b3KgFTWkUbtLrmaPJKaoe0P'
      redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
