import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='py-2 px-4 px-blue bg bg-blue-500 text-white rounded hover:bg-blue-400'>submit
            {children}
        </button>
    )
}
export default Button