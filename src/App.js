import React from "react";
import Weather from "./Weather";
import { StrictMode } from "react";
import "./Weather.css";
function App() {
  return (
    <StrictMode>
      <Weather defaultCity="Sydney" />
    </StrictMode>
  );
}

export default App;
