import react, { useState } from "react";

const FunctionComponent = (props) => {
  const [count, Setcount] = useState(0);

  return (
    <>
      <p>Count is : {count}</p>
      <button onClick={() => alert("Button Clicked")}>Increment</button>
    </>
  );
};

export default FunctionComponent;
