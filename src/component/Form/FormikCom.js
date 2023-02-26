import React from 'react'

import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.pass) {
    errors.pass = 'Required';
  } else if (values.pass.length > 20) {
    errors.pass = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
export default function FormikCom() {
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            pass:''
        },
        validate,
        onSubmit :(values,{resetForm})=>{
          alert(JSON.stringify(values, null, 2));
          resetForm({values:" "});
        }
    })
  return (
    <div>
      <h1>Form using formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Enter your name</label>
            <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange}/>
        </div>
        <div>
            <label>Enter your email</label>
            <input type="email" value={formik.values.email} name="email" onChange={formik.handleChange}/>
        </div>
        <div>
            <label>Enter your Password</label>
            <input type="pass" value={formik.values.pass} name="pass" onChange={formik.handleChange}/>
        </div>
        <button type='submit'>Submt</button>
      </form>
    </div>
  )
}
