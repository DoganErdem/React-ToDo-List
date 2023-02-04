import React, { useState } from 'react';
import "./button.scss"

function Button({ onClick, changeBtn}) {

    

    return (
        <div className='button'>
            {changeBtn ? <button className='button-add' type='button' onClick={onClick}> Add Task </button> : 
            <button className='button-edit' type='button' onClick={onClick}> Edit Task </button>
            }
            
            <select className='button-options' >
                <option className='button-options-all'> All </option>
                <option className='button-options-completed'> Completed </option>
            </select>
        </div>
    );
}

export default Button;