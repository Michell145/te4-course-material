import React, { useState } from "react";

const listComponent = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const addTask = () => {
    if (!input.trim()) return
setList([
...list, input
])
setInput("")
}
const removeTask = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
}
  return <div>
    <h2>Example - array - useState - list component</h2>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)} placeholder="new todo"/>
      <button onClick={addTask}>add task</button>
{list.length && (
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task} <button onClick={() => removeTask(index)}>remove</button></li>
        ))}
      </ul>
)}

  </div>;
};

export default listComponent;
