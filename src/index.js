import logo from'./assets/img/logo.png'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { wait } from '@testing-library/user-event/dist/utils';


const root = ReactDOM.createRoot(document.getElementById('root'));
window.onload = function(){
  var body = this.document.querySelector('body');
  var preloader = this.document.getElementById('pre');
  setTimeout(function(){
    preloader.style.opacity='50%'
    preloader.style.opacity='0';
    body.style.display='flex';
    body.style.overflow='scroll';
    console.log(preloader);
    console.log('cargado');
  },3000)
  
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
