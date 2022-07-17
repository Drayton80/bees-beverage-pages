import React from "react";
import App from "./App";
import "./App.less";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./stores/User/Context";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
