import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('./serviceworker.js')
            .then((reg) => console.log('success', reg.scope))
            .catch((e) => console.log('error', e))
    })
}

root.render(

      <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </React.StrictMode>

);


