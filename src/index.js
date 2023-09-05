import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "./App"
import "./style.css"
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App></App>
)