import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootStore from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
