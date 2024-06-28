import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const upperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const clearBox = () => {
    const newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaced = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Something..
        </label>
        <textarea
          className="container my-3"
          style={{ backgroundColor: props.mode === "dark" ? "#333333" : "white", color: props.mode === "dark" ? "white" : "black"  }}
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleChange}
        
          defaultValue={"Enter Something"}
        />
        <button
          type="button"
          class="btn btn-outline-primary btn-sm my-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          onClick={upperCase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm mx-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          onClick={lowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm mx-1"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm mx-1"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          onClick={handleExtraSpaced}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm mx-1"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          onClick={clearBox}
        >
          Clear Text
        </button>
        <h5 className="my-3">The Summary of the Paragraph</h5>
        <p>
          The Words in the Box {text.split(" ").length} and the Characters in
          the Box {text.length}
        </p>
        <p>The Words will Read in : {0.008 * text.split(" ").length} minutes</p>
      </div>
    </div>
  );
}
