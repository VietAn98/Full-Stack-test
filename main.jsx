import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

serviceWorker.unregister();
