import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import './index.css';
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/animate.css";
import "./assets/plugins/datatables/datatables.min.css";
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
