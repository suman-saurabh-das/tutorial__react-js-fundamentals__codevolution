import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Disabling strict mode to prevent duplication of console log statements
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
