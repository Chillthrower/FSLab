import './App.css';
import React from "react";

export default function App() {
  let user = "";
  return (
    <div className="App">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => user = e.target.value} /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={() => alert("Logged in as: " + user)}>Login</button>
    </div>
  );
}
