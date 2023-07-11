import { useMemo, useState } from "react";

// React re render our component, the entire function get called.
function UseMemo() {
  const [numbers] = useState([10, 20, 30, 55]); // define the state here...
  const total = numbers.reduce((a, b) => a + b, 0); // logic a: accumalotor,  b: iteration over array.

  //write the logic with useMemo

  const [val] = useState([100, 200, 300, 400]);
  const answer = useMemo(() => val.reduce((acc, iter) => acc + iter, 0), [val]);

  const [names] = useState(["mohit", "lohit", "zohit", "aohit", "sohit"]);
  const output = useMemo(() => [...names].sort(), [names]);
  return (
    <div>
      <div>Total:{total}</div>
      <div>Answer:{answer}</div>
      <p>{names.join(" ")}</p>
      <p>{output.join(" ")}</p>
    </div>
  );
}

export default UseMemo;
