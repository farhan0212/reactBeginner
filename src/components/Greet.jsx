import React, { useState } from "react";

const Greet = () => {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(null);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> tambah </button>
      <button onClick={() => setCount(count - 1)}> kurang </button>
      <inpu>{hello}</inpu>
      <button onClick={() => setHello(alert("hello nama"))}>click me</button>
    </div>
  );
};

export default Greet;
