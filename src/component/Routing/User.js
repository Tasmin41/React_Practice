import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParam,setSearchParam] = useSearchParams();
    const [name,setName] = useState("");
    const [age,setAge] = useState("");

    const handleSubmit = (e)=>{
        // e.preventDefault();
        setSearchParam(name={name},age={age})
    }
  return (
    <div>
        {/*get data from query*/}
      {/* <h1>user {searchParam.get("id")}</h1>
      <h1>user {searchParam.get("name")}</h1> */}



      {/*Set data*/}
      
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="name"
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input type="text"
        name="age"
        placeholder='age'
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default User
