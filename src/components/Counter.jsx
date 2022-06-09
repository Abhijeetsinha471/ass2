import { useState } from "react";

const Counter = ({ counter }) => {
  const [count, setCounter] = useState(counter);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
    if (count === 0) {
      setCounter(0);
    }
  };
  const double = () => {
    setCounter(2 * count);
  };
  const reset = () => {
    setCounter(0 * count);
  };
  return (
    <div id="inside">
      <p>
        {" "}
        {count % 2 === 0 ? (
          <h4 style={{ color: "green" }}>{count}</h4>
        ) : (
          <h4 style={{ color: "red" }}>{count}</h4>
        )}
      </p>

      <button style={{ background: "green" }} onClick={increment}>
        Increment
      </button>
      <button style={{ background: "Red" }} onClick={decrement}>
        Decrement
      </button>
      <button style={{ background: "yellow" }} onClick={double}>
        Double
      </button>
      <button style={{ background: "Blue" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;