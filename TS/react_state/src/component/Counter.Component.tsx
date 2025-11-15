import { useState } from "react";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);
  console.log(currentCount);

  return (
    <div className="">
      <h2>Counter +</h2>
      <button onClick={() => setCurrentCount(currentCount + 1)}>
        count: {currentCount}
      </button>
    </div>
  );
};

export default Counter;
