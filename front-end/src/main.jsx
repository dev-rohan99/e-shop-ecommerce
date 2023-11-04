import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import './index.css';
import "./assets/css/style.min.css";
import "./assets/css/demo1.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/datatables/datatables.min.css";
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
