import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1. Runs after every render
  useEffect(() => {
    console.log("Effect 1: Every render");
  });

  // 2. Runs after initial mount
  useEffect(() => {
    console.log("Effect 2: Component mounted");
  }, []);

  // 3. Runs when count changes
  useEffect(() => {
    console.log("Effect 3: Count changed:", count);
  }, [count]);

  return (
    <div>

      <h1>useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>

      <br /><br />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <p>Name: {name}</p>

    </div>
  );
}

export default App;