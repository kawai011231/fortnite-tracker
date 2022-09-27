import React, { useState } from "react";

export const FormInput = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Player_name"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
