// react imports
import React from "react";
import ReactDOM from "react-dom/client";
// import App
import App from "./App.jsx";
// styles
import "./index.css";
// react redux imports
import { Provider } from "react-redux";
import { store } from "./app/store.js";

// react toastify
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Toaster position="top-right" />

      <App />
    </Provider>
  </>
);
