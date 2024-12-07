import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
);
