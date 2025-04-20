import './App.css';
import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () =>
    !user || !pass
      ? alert("Please fill in both Username and Password.")
      : alert(`Logged in as: ${user}`);

  return (
    <div className="App">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
