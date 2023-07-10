import { useState } from "react";
import Inputbox from "./Components/Inputbox/Inputbox";

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
      <Inputbox />
    </>
  );
}
export default App;
