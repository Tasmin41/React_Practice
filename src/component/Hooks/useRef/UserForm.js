import React,{useRef} from 'react'

const UserForm = () => {

    const userNameRef = useRef();
    const passRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userNameRef.current.value);
        console.log(passRef.current.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label>User Name : </label>
                <input type="text" id="username" ref={userNameRef}/>
            </div>
            <div className='form-field'>
                <label>Password : </label>
                <input type="password" id="password" ref={passRef}/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default UserForm
