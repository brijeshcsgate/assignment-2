import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

import { NavigationProvider } from "./Context/navigation";

// Api
import { ApiContextProvider } from "./Context/api";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <NavigationProvider>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </NavigationProvider>
);
