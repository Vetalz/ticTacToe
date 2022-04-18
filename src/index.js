import "core-js/stable";
import "regenerator-runtime/runtime";
import './style.scss';

import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <App />
)

