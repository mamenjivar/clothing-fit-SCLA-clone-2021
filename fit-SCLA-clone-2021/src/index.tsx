import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { UIProvider } from "./util/Context-API-login";

ReactDOM.render(
  <UIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UIProvider>,
  document.getElementById("root")
);