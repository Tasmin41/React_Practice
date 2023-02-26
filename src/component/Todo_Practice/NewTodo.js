import React,{useState} from 'react'

const NewTodo = (props) => {
    const [todo,setTodo]=useState('');


    const handleInputChange = (e)=>{
        setTodo(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.newTodo(todo)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New todo :</label>
        <input
         type="text"
         id="todo" 
         name="todo"
         value={todo}
         onChange={handleInputChange}/>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewTodo
