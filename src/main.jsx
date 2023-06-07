import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
// import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
//prime react themeing
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// const GlobalStyle = createGlobalStyle`
//     body {
//       font-family: var(--font-family);
//     }
//   `;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <GlobalStyle /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
