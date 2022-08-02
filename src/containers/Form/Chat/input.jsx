import React from 'react'
import './chat.css'
function Input() {
    return (
        <div className='wrap-input-chat'>
            <input 
                type="text" 
                className='chat-input'
                placeholder='Message...' 
            />
            <button className='btn-submit'>Gửi</button>
        </div>
    )
}

export default Input