import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, set] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => set(count + 1)}>Increment</button>
      <button onClick={() => set(0)}>Reset</button>
    </div>
  );
}
