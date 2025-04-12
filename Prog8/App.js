import React, { useEffect, useState } from "react";

export default function App() {
  const [msg, set] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(d => set(d.message))
      .catch(console.error);
  }, []);

  return <h1>{msg}</h1>;
}
