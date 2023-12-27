import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/js/dist/modal.js"
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
