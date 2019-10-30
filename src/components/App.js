import React from "react";
import logo from "assets/logo.svg";

const App = () => {
  return (
    <div className="font-sans text-center">
      <header
        className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white"
        style={{ fontSize: "calc(10px + 2vmin)" }}
      >
        <img src={logo} style={{ height: "40vmin" }} alt="logo" />
        <p>
          Edit <code className="font-mono">src/App.js</code> and save to reload.
        </p>
        <a
          className="text-teal-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

// Grid
// Card
// Card front
// Card back
// Flip on click
// 3D hover
