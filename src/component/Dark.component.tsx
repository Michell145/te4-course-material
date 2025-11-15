import {useState} from 'react'

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    function handleToggle() {
        setIsDarkMode((prev) => !prev);
    }
  return (
    <div>
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={handleToggle}> set Mode</button>
    </div>
  )
}

export default Dark