import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
