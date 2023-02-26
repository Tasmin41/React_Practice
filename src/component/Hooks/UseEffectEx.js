
import React,{useState,useEffect} from 'react'

const UseEffectEx = () => {
  const [count,setCount]=useState(0);
  const [loading,setloading]=useState(5);


  useEffect(()=>{
    console.log("Ok useEffect")
  },[count])
  
  return (
    <div>
      {console.log("rendering")}
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setloading(loading+5)}}>+</button>
    </div>
  )
}

export default UseEffectEx
