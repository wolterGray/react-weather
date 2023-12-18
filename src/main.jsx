import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";
import {MyContextProvider} from "./myContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContextProvider>
);
