import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { a, b, c } from "./wlp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">{a}</h1>
      <div className="bg-gray-300">
        <h2 className="p-3 text-3xl font-bold">
          {b}
        </h2>
        <button onClick={() => setCount((count) => count + c)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>second update to override first!</p>
        <p>this is a different update</p>
        <p>new update. 123456</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
