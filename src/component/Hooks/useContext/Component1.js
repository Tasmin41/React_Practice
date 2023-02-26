import React from 'react'
import { useState } from 'react';

import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
    const [user,setUser] = useState({
        id:101,
        name:"Tasmin Begum"
    });
    const [text,setText] = useState("Hello Bangladesh");
  return (
    <UserContext.Provider value={{user,text}}>
        <Component2 />
    </UserContext.Provider>
  )
}

export default Component1
