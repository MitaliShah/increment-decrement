import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount(preCount => preCount + 1);
  }

  function decrement() {
    setCount(preCount => preCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
