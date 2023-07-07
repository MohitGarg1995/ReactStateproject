import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  const clickCounter = () => {
    setCount(count + 5);
  };
  return (
    <>
      <div>
        <button onClick={clickCounter}>Count Button:{count}</button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}
export default App;
