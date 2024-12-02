import React from "react";

function Counter({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>decrementar</button>
    </div>
  );
}

export default Counter;
