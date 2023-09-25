import React, { useState, useEffect } from "react";

export default function InputValidate() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.length < 5 || /\d/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);

  return (
    <>
      <p>Use Case 2: Running on State Change : InputValidate</p>
      <br />
      <form>
        <lable htmlFor="input">
          enter more then 5 character to validate input
        </lable>
        <br />
        <input
          type="text"
          id="input"
          placeholder="Enter some text..."
          autoComplete="off"
          value={input}
          onChange={inputHandler}
          style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
        />
      </form>
      <p>
        <span
          style={
            isValid
              ? { backgroundColor: "lightgreen", padding: "1rem" }
              : { backgroundColor: "lightpink", padding: "1rem" }
          }
        >
          {isValid ? "valid input" : "input not valid"}
        </span>
      </p>
    </>
  );
}
