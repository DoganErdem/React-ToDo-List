import React from 'react';
import "./input.scss"

function Input({type, placeholder, value, onChange}) {
    return (
        <>
            <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange} ></input>
        </>
        
    );
}

export default Input;