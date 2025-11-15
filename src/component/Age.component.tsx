import { useState } from "react";

const AgeCounter = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>set Age</button>
      <br />
      {name && age > 0 && (
        <p>
          Hello my name is {name} and I am {age} years old.
        </p>
      )}
    </div>
  );
};

export default AgeCounter;
