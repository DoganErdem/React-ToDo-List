import React, { useState } from 'react';
import "./button.scss"

function Button({ onClick, changeBtn}) {

    

    return (
        <div className='button'>
            {changeBtn ? <button className='button-add' type='button' onClick={onClick}> Add Task </button> : 
            <button className='button-edit' type='button' onClick={onClick}> Edit Task </button>
            }
            
        </div>
    );
}

export default Button;