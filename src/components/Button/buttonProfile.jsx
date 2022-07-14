import React from 'react'

function ButtonProfile() {
    return (
        <>
            <button className='profile-btn' style={{
                margin:'0 20px',
                backgroundColor: 'transparent',
                border: '1px solid rgb(219,219,219)',
                color:'rgb(38,38,38)',
                borderRadius:'4px',
                fontSize:'14px',
                padding:'5px 9px',
                cursor:'pointer'
            }}>Edit profile</button>
        </>
    )
}

export default ButtonProfile