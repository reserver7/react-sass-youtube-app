import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { SideBarContextProvider } from "./context/SideBarContext.jsx";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <SideBarContextProvider>
          <App />
        </SideBarContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
