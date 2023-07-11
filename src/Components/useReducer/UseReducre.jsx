import { useReducer, useState } from "react";

function UseReducre() {
  //useReducers syntax
  // .reduce((current-value, Iteration-over-indexing  ) => {excisting-val + addOn-eachnumbergoTHROUGH}, initial value);

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // This is actions type       like type: "SET_NAME", mentioned below.
        case "SET_NAME":
          return { ...state, name: action.payload }; //create new object with ...state & payload
        case "ADD_NAME":
          return { ...state, names: [state.names, state.name], name: "" };
      }
    },
    {
      names: [], // names with empty array
      name: "", // name with empty string      Basically these two are here the current initial states.
    }
  );

  const handleChange = (e) => {
    // Dispatch to current reducer function
    dispatch({
      type: "SET_NAME",
      payload: e.target.value,
    });
  };
  const addname = () => {
    dispatch({
      type: "ADD_NAME",
    });
  };

  //another examples of reducers:
  const [numbers] = useState([10, 20, 30, 40, 50]);
  const total = numbers.reduce((acc, number) => acc + number, 0);
  return (
    <div>
      <div>
        {state.names.map((name, index) => {
          <div key={index}>{name}</div>;
        })}
      </div>
      {/* <input type="text" value={firstName} onChange={changeFirstname}></input> */}
      {/* <input type="text" value={LastName} onChange={changeLastname}></input> */}
      <input type="text" value={state.name} onChange={handleChange}></input>
      <button onClick={addname}>+ Add Name </button>
      {/* This task is not working properly */}

      {state.name}

      <div>Total: {total}</div>
    </div>
  );
}

export default UseReducre;
