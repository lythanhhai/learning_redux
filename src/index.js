import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combine from "./Redux_Todo/store.js";

// middleware 
const myMiddleWare = store => next => action => {
  console.log(action.type + " " + action.payload.value)
  if(action.type === "add_todo" && action.payload.value === "fuck")
  {
    action.payload.value = "****"
  }
  return next(action)
}

let store = createStore(combine, applyMiddleware(myMiddleWare, thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
