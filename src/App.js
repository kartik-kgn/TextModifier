import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleBtn = (props) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333333";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleBtn={toggleBtn} />
      <Form mode={mode}/>
    </>
  );
}

export default App;
