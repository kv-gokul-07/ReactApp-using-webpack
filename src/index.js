import React from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./components/Welcome";

const root = document.getElementById("root");
createRoot(root).render(<Welcome />);