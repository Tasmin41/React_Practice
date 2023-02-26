import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'


const todosDummy = ["todo1","todo2"];

function Home() {
    const [todos,setTodos]=useState(todosDummy);

    const addNewTodo = (newTodo)=>{
        setTodos([...todos,newTodo]);
    };

  return (
    <div>
       <NewTodo newTodo = {addNewTodo}/>
      <Todos todos={todos}/>
      
    </div>
  )
}

export default Home
