'use client';
import React, { useState } from 'react'

const Todolist = () => {

    const [count, setcount] = useState(0);

    const [Tasklist, setTasklist] = useState([
        { text: 'learn html', copleted: false, added: new Date() },
        { text: 'learn css', copleted: false, added: new Date() },
        { text: 'learn js', copleted: false, added: new Date() },
    ]

    )

    const addTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const newtask = { text: e.target.value, completed: false, added: new Date() }
            setTasklist([newtask, ...Tasklist]);

        }
    }

    const deleteTask = (index) => {
        console.log(index);

        const temp = Tasklist;
        temp.splice(index, 1);

        setTasklist([...temp]);
    }

    const completeTask = (index) => {
        const temp = Tasklist;

        temp[index].completed = !temp[index].completed;
        setTasklist([...temp]);
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
                        Tasklist.map((task, index) => {
                            return <div key={index} className='shadow mb-5 p-5 border'>

                                {
                                    task.completed ? (
                                        <p className='bg-green-600 text-white font-bold px-3 w-fit rounded-full'>finished</p>
                                    ) : (
                                        <p className='bg-yellow-600 text-white font-bold px-3 w-fit rounded-full'>pending</p>
                                    )

                                }
                                <p className={'text-lg' + (task.completed && 'line-through')}>{task.text}</p>
                                <div className='flex justify-end gap-3'>
                                    <button onClick={() => { completeTask(index) }}
                                        className='bg-blue-500 text-white py-1 px-4 rounded-full'>
                                        {task.completed ? 'undo' : 'complete'}</button>
                                    <button onClick={() => { deleteTask(index) }}
                                        className='bg-red-500 text-white  py-1 px-4 rounded-full'>Delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Todolist

