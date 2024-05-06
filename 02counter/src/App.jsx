import { useState } from "react";
import "./App.css";

function App() {
  
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  // added counter limits, so counter stays between ( 0<=counter<=20 ).
  if (counter > 20) {
    counter--;
  }
  else if (counter < 0) {
    counter++;
  }

  return (
    <>
      <h1>Ak and React </h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
