'use client';
import React from 'react'
import classes from './login.module.css';
import Button from '@/components/Button'
import TextInput from '@/components/Input'
import { useFormik } from 'formik'

import* as Yup from 'Yup';


const loginSchema = Yup.object().shape({
  name : Yup.string().required('name is required ').min(3,'name must be atleast three characters'),
  email : Yup.string().required('email is required ').min('email is invalid'),
  password : Yup.string().required('password is required ').min(5,'must be atleast five characters')
  .matches(/[A-Z]/,'password must contain a uppercase letter')
  .matches(/[a-z]/,'password must contain a lowercase letter')
  .matches(/[0-9]/,'password must contain a number')
  .matches(/\w/,'password must contain a special character'),
  confirmPassword:Yup.string().required('confirm password is required')
  .oneOf([Yup.ref('password'),null],'password must match')
})



const login = () => {

  const loginForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
      confirmPassword:''
    },
    onSubmit: (values) => {
      console.log(values);
      // Send values to backend
    },
    validationSchema: loginSchema

  });

  return (
    <div>
      <h1 className='text-2xl font-bold uppercase my-10 text-center'>login Page</h1>
      <div className='max-w-lg mx-auto rounded-lg shadow-lg mt-10 p-10'>
        <form onSubmit={loginForm.handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" id='name' onChange={loginForm.handleChange} value={loginForm.values.name}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (loginForm.touched.name &&  loginForm.errors.name)&& (
              <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.name}</p>
            )
          }
          

          <label htmlFor="email">Email Address</label>
          <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
           {
            (loginForm.touched.email &&  loginForm.errors.email)&& (
              <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.email}</p>
            )
          }
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
           {
            (loginForm.touched.password &&  loginForm.errors.password)&& (
              <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.password}</p>
            )
          }
           <label htmlFor="confirmpassword">confirmPassword</label>
          <input type="text" id='confirmPassword' onChange={loginForm.handleChange} value={loginForm.values.name}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (loginForm.touched.confirmPassword &&  loginForm.errors.confirmPassword)&& (
              <p className='text-red-500 mb-5 text-sm'>{loginForm.errors.confirmPassword}</p>
            )
          }
          <button
            type='submit'
            className='bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default login;


 {/* <h1 className='text-3xl text-center mt-5'>login</h1>

<p style={{ color: 'blue', fontsize: 30, textAlign: 'center' }}>welcome</p>
<label htmlFor="">some label</label>
<input type="text" />
<hr />
<br />

<button className='btn'>home button</button>
<button className={classes.loginBtn}>login button</button> */}
