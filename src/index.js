import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/BackgroundImage.scss';
import './styles/Journal.scss';
import './styles/Button.scss';
import './styles/Colors.scss';
import './styles/Weather.scss';

import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
