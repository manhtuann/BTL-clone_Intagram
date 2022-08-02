import React, { useState } from 'react'

function Comment({setInput}) {
    const [value,setValue] = useState('')

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleClick = (e)=>{
        setInput(prev => [...prev,value]);
        setValue('')

    }
    return (
        <>
            <input 
                type="text" 
                className='input' 
                placeholder='Add a comment' 
                value={value}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Post</button>
        </>
    )
}

export default Comment