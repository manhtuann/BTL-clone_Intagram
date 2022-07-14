import React from 'react';

export const Input = ({
    id,
    name,
    placeholder,
    type = 'text',
    data,
    handleChange,
    handleBlur,
}) => {
    const { value, isError, msg } = data;
    return (
        <>
            <input
                className={`${isError && 'input__error'}`}
                id={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
            // onFocus={()=>{console.log('onFocus');}}
            />
            {isError && <span>{msg}</span>}
        </>
    );
};