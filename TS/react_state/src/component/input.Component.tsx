import React, { useState } from "react";

const MyInput = () => {
  const [text, setText] = useState<string>("initialstate");
  console.log(text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Example - string with useState / single input</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed {text}</p>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
};
export default MyInput;
