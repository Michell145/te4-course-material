import React, { useState } from "react";

const LikeButtonComponent = () => {
  const [liked, setliked] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setliked(event.target.checked);
  }
  return (
    <div>
      <h2>Like Button Example</h2>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />i like
        this {liked ? "❤️" : "♡"}
      </label>
      <p>{liked ? "Thank you for liking!" : "Please like this."}</p>
    </div>
  );
};

export default LikeButtonComponent;
