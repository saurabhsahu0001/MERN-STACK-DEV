"use client"
import React from "react"
import { useState } from "react"


// three types discussed all important 

function app () {
     const [first, setfirst] = useState(0)
     const [name, setname] = useState("aman")
     const [form, setForm] = useState({email: "", phone: ""})
}

const handleclick =() =>{
    alert ('hey i am clicked')
}
const handlechange =(e) =>{
    setname(e.target.value)
}
const handlechangee =(e) =>{
    setForm({...form, [e.target.name]: e.target.value})
console.log(form)

  
}
return(
    <>
    <div className="button">
    <button onClick={handleclick}>click me</button>  // simplejust use on click to see whatn happen and whhat is going to happen is stiored in handleclick
    </div>

  <input type="text" value={name} onChange={handlechange} />//   if u using text type use usesate, namen is firdt option  thhen store in handlechange what hapen when u write bt in that second setname e.trgrt valuue comes in picture it gives us permission to write after delete again and again

  <input type="text" name='email' value={form.email} onChange={handleChangee} />// what u can do when u are using to type text text then use ustate with form ,setform and in value write form.both text names then go up in usestate write both values there not 0 then go to on change then make any fuction like handle chagge and store in waht going to happen  
  <input type="text" name='phone' value={form.phone} onChange={handleChangee} />
  </>
)

export default app