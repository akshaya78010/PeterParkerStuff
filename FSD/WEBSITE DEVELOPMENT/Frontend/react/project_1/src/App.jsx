import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
function App() {
  const fruit = "apple";
  return (
    <>
      <ClassComponent />
      <FunctionComponent numbr={21} />
      <h1>{fruit}</h1>
    </>
  );
}

export default App;
