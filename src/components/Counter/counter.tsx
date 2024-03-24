import React, { useState } from "react";
import s from "./index.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  setCounter(1);

  const handleCounter = () => {
    setCounter((value) => value++);
  };

  return (
    <div>
      <span>{counter}</span>
      <button className={s.btn} onClick={handleCounter}>
        btn
      </button>
    </div>
  );
};

export default Counter;
