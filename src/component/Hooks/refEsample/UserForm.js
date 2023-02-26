import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.usernameRef = createRef();
        this.state={

        }
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.usernameRef.current.value);
        this.usernameRef.current.style.backgroundColor="red"
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className='form-field'>
                <label>User Name : </label>
                <input type="text" id="username" ref={this.usernameRef}/>
            </div>
            <div className='form-field'>
                <label>Password : </label>
                <input type="password" id="password"/>
            </div>
            <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}
