import React from "react";
import { useState } from "react";
function Child() {
    let [count,setCount] = useState(0)

    function Counter(){
       
    }
  return (
    <>
      <hr />
      <div>This is the child component</div>
      <button onClick={Counter}>Click here</button>
    </>
  );
}


function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <p>This is the parent component</p>
      <Child/>
    </div>
  );
}

export default Parent;