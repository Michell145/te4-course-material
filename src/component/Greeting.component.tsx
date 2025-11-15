import { useState } from "react";

const Greetingcomponent = () => {
  const [name, setName] = useState("Guest");
  const [inputValue, setInputValue] = useState("");

  function handleSave() {
    if (inputValue.trim() !== "") {
      setName(inputValue);
      setInputValue("");
    }
  }

  return (
    <div>
      <h2>{name ? `Hello, ${name}!` : "Hello, Guest!"}</h2>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="type a new name" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Greetingcomponent;
