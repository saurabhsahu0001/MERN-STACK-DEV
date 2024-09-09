import React from 'react'

const Input = ({ id, label, type, placeholder }) => {
    return (
        <div>input
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder}
                className='border bg-gray-200 py-1 px-3 w-full hover:bg-blue-400' />
        </div>
    )
}

export default Input