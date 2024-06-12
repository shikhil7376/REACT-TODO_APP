import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0)
  
    function decrement(){
        if(count!=0){
            setCount(count-1)
        }
    }
 function increment(){
    if(count<=10){
        setCount(count+1)
    }
 }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}  >increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
