import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.sass";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./grid.sass";
import "./dasha_style.sass";
import ScrollToTop from "./component/ScrollToTop";
//import "./component/FAQ/faq.scss";
//import "./component/Footer/Footer.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
