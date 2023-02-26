import React,{useState} from 'react'

const ShowHide = () => {

    const [toggle,setToggle] =useState(true);
  return (
    <div>
        {
            toggle && <p>In mutter der gerne der im. Und von die brust du junge denkst sonder, lachtet heimat im mit einz'ges fort.</p>
        }
      
      <button onClick={()=>{
        setToggle(!toggle);
      }}>
        {
            toggle ? "hide":"show"
        }
      </button>
    </div>
  )
}

export default ShowHide
