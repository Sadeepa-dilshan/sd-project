import React from "react";
import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    function legClick() {
      setCount(count -1);
    }
  
    return (
      <>
        <button onClick={handleClick}>Clicked + times</button>
        <h1>{count}</h1>
        <button onClick={legClick}>Clicked - times</button>
      </>
    );
  }
  export default MyButton;
  