import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import 'react-toastify/dist/ReactToastify.css';
// Uygulamayı redux alt yapısı ile sarmalamak amacıyla şunlar yapılır.. <Provider> kullanıldı..
const store = configureStore()

ReactDOM.render(
  <Provider store = {store}>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
