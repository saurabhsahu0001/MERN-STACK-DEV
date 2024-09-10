'use client';
import React, { useState } from 'react'

const Todolist = () => {

    const [count, setcount] = useState(0);

    const [Tasklist,setTasklist] = useState([
        {text:'learn html', copleted:false, added:new Date()},
        {text:'learn css', copleted:false, added:new Date()},
        {text:'learn js', copleted:false, added:new Date()},
    ]

    )

    const addTask = (e)=>{
        if(e.code === 'Enter'){
            console.log(e.target.value);
            e.target.value = ''
        }
    }
  return (
    <div>
         {/* <h3 className='text-4xl'>{count}</h3>
         <button onClick={() => {setcount(count+1); console.log(count);}}>Add count</button> */}
        <h1 className='uppercase font-bold text-5xl text-center my-10'>Todo list</h1>
        <div className='border shadow rounded-lg p-6 max-w-4xl mx-auto'>
            <div className='p-5 border-b-2'>
                <input onKeyDown={addTask}
                placeholder='📃 Enter a task to add'
                className='py-2 px-4 w-full border bg-grey-300'
                type="text" />
            </div>
            <div className='p-5'>
                {
                    Tasklist.map((task,index) =>  { return <div key={index}>
                        <p>{task.text}</p>
                        <div className='flex justify-end gap-3'>
                            <button className='bg-blue-500 text-white py-1 px-4 rounded-full'>Complete</button>
                            <button className='bg-red-500 text-white  py-1 px-4 rounded-full'>Delete</button>
                        </div>
                    </div>})
                }
            </div>
        </div>

    </div>
  )
}

export default Todolist