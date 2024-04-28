import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./styles/universal.scss";
import "../fonts/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
