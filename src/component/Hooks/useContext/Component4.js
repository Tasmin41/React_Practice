import React,{useContext} from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const {user,text}= useContext(UserContext);
    console.log(user);
    console.log(text);
  return (
    <div>
        <p>{text}</p>
      <h3>Id : {user.id}</h3>
      <h2>Name:{user.name}</h2>
    </div>
  )
}

export default Component4
