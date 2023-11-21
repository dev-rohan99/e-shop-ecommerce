import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "react-redux";
import './index.css';
import "./assets/css/style.min.css";
import "./assets/css/demo1.min.css";
import "./assets/vendor/animate/animate.min.css";
import "./assets/vendor/magnific-popup/magnific-popup.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
