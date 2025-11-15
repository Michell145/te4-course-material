import React, {useState} from "react";

const Exercise1Component = () => {
    const [text, setText] = useState<string>("hello");
    console.log(text);
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>{text}</p>
            <button onClick={() => setText("")}>Clear</button>
        </div>
    )
    
}

export default Exercise1Component;