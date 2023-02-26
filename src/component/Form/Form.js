
import React, { useState } from 'react';

export default function Form() {

    const [user,setValue] =useState({name:'',pass:''});
    const {name,pass}=user;

    const changeInput =(e)=>{
        // setValue({...user,[e.target.name]:e.target.value});
        const fieldName = e.target.name;
        if(fieldName==='name'){
            setValue({name: e.target.value,pass});
        }
        if(fieldName==='pass'){
            setValue({pass: e.target.value,name});
        }
    }
    // const changeName =(e)=>{
    //     setValue({name: e.target.value,pass});
    // }
    // const changePass =(e)=>{
    //     setValue({pass: e.target.value,name});
    // }
    const submitCall =(e)=>{
        console.log("sumitted successfully");
        console.log(user);
        e.preventDefault()
    }
  return (
    <div>
      <h1>Form Included</h1>
        <form action='' onSubmit={submitCall}>
            <div >
            <label>Your Name : </label>
            <input name='name' type="text" className='form-control' value={name} onChange={changeInput}/>
        </div>
        <div >
            <label>Enter Password : </label>
            <input name='pass' type="text" className='form-control'value={pass} onChange={changeInput}/>
        </div>
        <br/>
        <input type="submit" value="submit" />
        </form>
    </div>
  )
}
