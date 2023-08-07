import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/layout';
// global style
import './assets/global.css'
import SiteRouter from './Components/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <SiteRouter/>
  </>
);

reportWebVitals();
