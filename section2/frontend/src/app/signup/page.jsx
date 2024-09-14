'use client';
import Button from '@/components/Button'
import TextInput from '@/components/Input'
import { useFormik } from 'formik'
import React from 'react'
import* as Yup from 'Yup';


const signupSchema = Yup.object().shape({
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
const Signup = () => {

  const signupForm = useFormik({
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
    validationSchema: signupSchema

  });

  return (
    <div>
      <h1 className='text-2xl font-bold uppercase my-10 text-center'>Signup Page</h1>
      <div className='max-w-lg mx-auto rounded-lg shadow-lg mt-10 p-10'>
        <form onSubmit={signupForm.handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.name &&  signupForm.errors.name)&& (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.name}</p>
            )
          }
          

          <label htmlFor="email">Email Address</label>
          <input type="email" id='email' onChange={signupForm.handleChange} value={signupForm.values.email}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
           {
            (signupForm.touched.email &&  signupForm.errors.email)&& (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.email}</p>
            )
          }
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
           {
            (signupForm.touched.password &&  signupForm.errors.password)&& (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.password}</p>
            )
          }
           <label htmlFor="confirmpassword">confirmPassword</label>
          <input type="text" id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.name}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.confirmPassword &&  signupForm.errors.confirmPassword)&& (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.confirmPassword}</p>
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

export default Signup


{/* <Button>my button </Button>
        <Button> submit</Button>
        <Button>know more </Button>

        <Input id = 'name' label= 'Name' type='text' placeholder='enter yr name'/>
        <Input id = 'email' label= 'Email' type='email' placeholder='enter yr email'/>
        <Input id = 'password' label= 'Password' type='password' placeholder='enter yr password'/> */}





