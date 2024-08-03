import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

const x=document.getElementById("root");

const root=createRoot(x);

root.render(<App/>);