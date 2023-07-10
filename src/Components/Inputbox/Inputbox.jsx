import { useState } from "react";

function Inputbox() {
  const [name, setName] = useState("");
  const [list, setList] = useState(["jack", "jill", "john"]);

  const onChange = (e) => {
    setName(e.target.value);
    // name("");
  };

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChange}></input>
      <button onClick={addName}>+ Add Name</button>
      <ul>
        {list.map((namess, index) => (
          <li key={index}>{namess}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inputbox;
